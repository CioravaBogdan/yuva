const selectors = {
    customerAddresses: 'body',
    addressCountrySelect: '[data-address-country-select]',
    addressContainer: '[data-address]',
    toggleAddressButton: 'button[aria-expanded]',
    cancelAddressButton: 'button[type="reset"]',
    deleteAddressButton: 'button[data-confirm-message]'
};

const attributes = {
    expanded: 'aria-expanded',
    confirmMessage: 'data-confirm-message'
};

class CustomerAddresses {
    constructor() {
        this.elements = this._getElements();
        if (Object.keys(this.elements).length === 0) return;
        this._setupCountries();
        this._setupEventListeners();
    }

    _getElements() {
        const container = document.querySelector(selectors.customerAddresses);
        return container ? {
            container,
            addressContainer: container.querySelector(selectors.addressContainer),
            toggleButtons: document.querySelectorAll(selectors.toggleAddressButton),
            cancelButtons: container.querySelectorAll(selectors.cancelAddressButton),
            deleteButtons: container.querySelectorAll(selectors.deleteAddressButton),
            countrySelects: container.querySelectorAll(selectors.addressCountrySelect)
        } : {};
    }

    _setupCountries() {
        if (Shopify && Shopify.CountryProvinceSelector) {
            // eslint-disable-next-line no-new
            new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
                hideElement: 'AddressProvinceContainerNew'
            });
            this.elements.countrySelects.forEach((select) => {
                const formId = select.dataset.formId;
                // eslint-disable-next-line no-new
                new Shopify.CountryProvinceSelector(`AddressCountry_${formId}`, `AddressProvince_${formId}`, {
                    hideElement: `AddressProvinceContainer_${formId}`
                });
            });
        }
    }

    _setupEventListeners() {
        this.elements.toggleButtons.forEach((element) => {
            element.addEventListener('click', this._handleAddEditButtonClick);
        });
        this.elements.cancelButtons.forEach((element) => {
            element.addEventListener('click', this._handleCancelButtonClick);
        });
        this.elements.deleteButtons.forEach((element) => {
            element.addEventListener('click', this._handleDeleteButtonClick);
        });
    }

    _toggleExpanded(target) {
        let elementId = target.getAttribute('id');
        if (target.hasAttribute('data-address')) {
            elementId = target.dataset.id;
        }
        // 🚀 VANILLA JS - jQuery removed
        focusElement = document.getElementById(elementId);
        const drawerClose = document.querySelector('.yv_side_drawer_close');
        if (drawerClose) drawerClose.focus();
        var popUp = target.parentNode.querySelector(".addressPopUp").innerHTML;
        var newTarget = document.querySelector('[data-drawer-body]');
        var parent = document.querySelector('[data-side-drawer]');
        parent.setAttribute('class', 'yv_side_drawer_wrapper');
        parent.setAttribute('id', 'addressSection');
        parent.classList.add('addressSection');
        document.querySelector('[data-drawer-title]').innerHTML = target.getAttribute('data-title');
        newTarget.innerHTML = popUp;
        document.querySelector('body').classList.add('side_Drawer_open');
        this.elements = this._getElements();
        this._setupCountries();
        this._setupEventListeners();
    }

    _handleAddEditButtonClick = ({ currentTarget }) => {
        this._toggleExpanded(currentTarget);
    }

    _handleCancelButtonClick = ({ currentTarget }) => {
        document.querySelector('body').classList.remove('side_Drawer_open');
    }

    _handleDeleteButtonClick = ({ currentTarget }) => {
        // eslint-disable-next-line no-alert
        if (confirm(currentTarget.getAttribute(attributes.confirmMessage))) {
            Shopify.postLink(currentTarget.dataset.target, {
                parameters: { _method: 'delete' },
            });
        }
    }
}

//** Reorder Product **//
// 🚀 VANILLA JS - jQuery removed
document.addEventListener('click', function(e) {
    if (e.target.closest('.reorderButton')) {
        e.preventDefault();
        console.log('reorderButton');
        let button = e.target.closest('.reorderButton');
        let formHtml = button.closest('.action-container').querySelector('.Reorder__container');
        let cloneForm = formHtml.cloneNode(true);
        const popupBody = document.querySelector('.yv-reorder-popup-body');
        popupBody.innerHTML = '';
        popupBody.appendChild(cloneForm);
        
        if (emptyCartStatus) {
            const container = popupBody.querySelector('.Reorder__container');
            if (container) container.classList.add('cart-empty');
            const clearCart = popupBody.querySelector('.reorder__clear-cart');
            if (clearCart) clearCart.setAttribute('disabled', 'true');
        } else {
            const clearCart = popupBody.querySelector('.reorder__clear-cart');
            if (clearCart) clearCart.removeAttribute('disabled');
            const warningWrapper = popupBody.querySelector('.cart-warning-wrapper');
            if (warningWrapper) warningWrapper.innerHTML = "<p class='error-text'>" + cartStatusNotEmpty + "</p>";
        }
        document.body.classList.add('reorderPopupShow');
    }
});

// Reorder Popup Close
// 🚀 VANILLA JS - jQuery removed
document.addEventListener('click', function(e) {
    if (e.target.closest('.reorder__cancel-item')) {
        e.preventDefault();
        const addToCartForm = e.target.closest('.Reorder__container');
        if (addToCartForm) {
            addToCartForm.classList.remove('cart-warning', 'addToCart');
        }
        document.body.classList.remove('reorderPopupShow');
    }
});

//** Add To Cart **//
// 🚀 VANILLA JS - jQuery removed
document.addEventListener('click', function(e) {
    const addToCartBtn = e.target.closest('.reorder__add_to_cart');
    if (addToCartBtn) {
        e.preventDefault();
        addToCartBtn.classList.add('is-loading');
        const addToCartForm = addToCartBtn.closest('.Reorder__container').querySelectorAll('form');
        Shopify.queue = [];
        addToCartForm.forEach(form => {
            const formData = new FormData(form);
            Shopify.queue.push({
                form: formData,
                formSelector: form
            });
        });
        multipleProductsAddToCart();
    }
});

//**  Move Along Function **//
// 🚀 VANILLA JS - jQuery removed, using Fetch API
multipleProductsAddToCart = function() {
    // If we still have requests in the queue, let's process the next one.
    if (Shopify.queue.length) {
        const request = Shopify.queue.shift();
        const formData = request.form;
        const form = request.formSelector;
        
        const formStatus = form.querySelector('.form-status');
        const formLoading = form.querySelector('.form-loading');
        if (formStatus) formStatus.classList.add('hidden');
        if (formLoading) formLoading.classList.remove('hidden');
        
        fetch(cartAddUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(res => {
            const formSuccess = form.querySelector('.form-success');
            if (formStatus) formStatus.classList.add('hidden');
            if (formSuccess) formSuccess.classList.remove('hidden');
            multipleProductsAddToCart();
        })
        .catch(error => {
            const submit = document.querySelector('.reorder__add_to_cart');
            const formError = form.querySelector('.form-error');
            
            if (formStatus) formStatus.classList.add('hidden');
            if (formError) formError.classList.remove('hidden');
            
            if (Shopify.queue.length) {
                multipleProductsAddToCart();
            }
            
            setTimeout(function() {
                if (submit) submit.classList.remove('is-loading');
            }, 1000);
        });
    }
    // If the queue is empty, we add 1 to cart
    else {
        setTimeout(function() {
            const submit = document.querySelector('.reorder__add_to_cart');
            document.body.classList.remove('reorderPopupShow');
            
            if (cartDrawerEnable) {
                const drawerBody = document.querySelector('[data-drawer-body]');
                const sideDrawer = document.querySelector('[data-side-drawer]');
                const drawerTitle = document.querySelector('[data-drawer-title]');
                
                if (drawerBody) drawerBody.innerHTML = preLoadLoadGif;
                if (sideDrawer) {
                    sideDrawer.setAttribute('class', 'yv_side_drawer_wrapper');
                    sideDrawer.setAttribute('id', 'mini__cart');
                    sideDrawer.classList.add('mini_cart');
                }
                if (drawerTitle) drawerTitle.innerHTML = cartTitleLabel;
                
                document.body.classList.remove('quickview-open');
                document.body.classList.add('side_Drawer_open');
                
                fetch(cartUrl)
                    .then(response => response.json())
                    .then(cart => {
                        buildCart(cart, true);
                        setTimeout(function() {
                            if (submit) submit.classList.remove('is-loading');
                        }, 1000);
                    });
            } else {
                window.location.assign(mainCartUrl);
            }
        }, 1000);
    }
}

//** Clear Cart **// 
// 🚀 VANILLA JS - jQuery removed
document.addEventListener('click', function(e) {
    if (e.target.closest('.reorder__clear-cart')) {
        e.preventDefault();
        const button = e.target.closest('.reorder__clear-cart');
        const addToCartForm = button.closest('.Reorder__container');
        
        fetch(window.Shopify.routes.root + 'cart/clear.js', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(json => {
            fetch(cartUrl)
                .then(response => response.json())
                .then(cart => {
                    buildCart(cart, true);
                    if (emptyCartStatus = true) {
                        button.setAttribute("disabled", true);
                        const warningWrapper = addToCartForm.querySelector('.cart-warning-wrapper');
                        if (warningWrapper) {
                            warningWrapper.innerHTML = "<p class='success-text'>" + cartStatusEmpty + "</p>";
                        }
                    }
                });
        });
    }
});

// 🚀 VANILLA JS - jQuery removed
document.addEventListener('change', function(e) {
    if (e.target.id === 'variantQty') {
        const input = e.target;
        let value = parseInt(input.value);
        let maxLength = parseInt(input.getAttribute('maxlength'));
        
        if (value > maxLength) {
            input.value = maxLength;
        } else if (value <= 0) {
            input.value = 1;
        }
    }
});