var cartNoteTyping;

validateQty = function (qty) {
  if (parseFloat(qty) == parseInt(qty) && !isNaN(qty)) {
    // We have a valid number!
  } else {
    // Not a number. Default to 1.
    qty = 1;
  }
  return qty;
};

const countryList = {
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, the Democratic Republic of the",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curacao",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea, Democratic People's Republic of",
  KR: "Korea, Republic of",
  XK: "Kosovo",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia, the Former Yugoslav Republic of",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States of",
  MD: "Moldova, Republic of",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  CS: "Serbia and Montenegro",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan, Province of China",
  TJ: "Tajikistan",
  TZ: "Tanzania, United Republic of",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Minor Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.s.",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

let convertShippingAmount = freeShippingBarAmount;
// 🚀 VANILLA JS - jQuery removed
function checkShippingAvailablity() {
  let selectedCountry = Shopify.country;
  let shippingCountriesContainer = document.getElementById("shippingcountries");
  if (!shippingCountriesContainer) {
    shippingCountriesContainer = document.getElementById("shippingCountry");
  }
  if (shippingCountriesContainer) {
    const options = shippingCountriesContainer.querySelectorAll("option");
    if (options.length > 0) {
      let shippingSelectedCountry = countryList[selectedCountry];
      const matchingOption = shippingCountriesContainer.querySelector(
        'option[value="' + shippingSelectedCountry + '"]'
      );
      return matchingOption !== null;
    }
  }
  return false;
}

// 🚀 VANILLA JS - jQuery removed
function freeShippingBar(cart) {
  let countryAvailable = checkShippingAvailablity();
  console.log('country available', countryAvailable);
  const shippingBarContainer = document.querySelector("[data-free-shipping-container]");
  if (countryAvailable && shippingBarContainer) {
    if (cart.item_count == 0) {
      shippingBarContainer.classList.add("hidden");
      return false;
    }
    let cartPrice = cart.total_price;
    let shippending = Shopify.formatMoney(
      convertShippingAmount - cartPrice,
      moneyFormat
    );
    let shippingPercentage = parseFloat(
      (cartPrice * 100) / convertShippingAmount
    ).toFixed(2);
    if (shippingPercentage > 10 && shippingPercentage < 100) {
      shippingPercentage = shippingPercentage - 5;
    } else if (shippingPercentage > 100) {
      shippingPercentage = 100;
    }
    const shippingText = document.querySelector("[data-free-shipping-text]");
    if (shippingText) {
      if (shippingPercentage >= 100) {
        shippingText.textContent = freeShippingBarSuccessText;
      } else {
        shippingText.textContent = freeShippingBarText.replace("||amount||", shippending);
      }
    }

    const shippingBar = document.querySelector("[data-free-shipping-bar]");
    if (shippingBar) {
      shippingBar.style.width = shippingPercentage + "%";
    }
    shippingBarContainer.classList.remove("hidden");
  }
}

var favicon = false;

function browserTabNotification() {
  if (browserNotificationStatus) {
    favicon = new Favico({
      animation: "pop",
      bgColor: browserNotificationBg,
      textColor: browserNotificationText,
      type: browserNotificationShape,
    });
  }
}

// 🚀 VANILLA JS - jQuery removed
document.addEventListener('DOMContentLoaded', function () {
  browserTabNotification();
  if (favicon) {
    favicon.badge(cartItemsCount);
  }
  if (freeShippingBarStatus) {
    if (Shopify.currency.active != shopCurrency) {
      let shippingAmount = parseInt(freeShippingBarAmount);
      if (shippingAmount != undefined) {
        convertShippingAmount = parseFloat(
          (shippingAmount * Shopify.currency.rate).toFixed(2)
        );
      }
    }
  }
});

// 🚀 VANILLA JS - jQuery removed
document.addEventListener("keydown", function(e) {
  if (e.target.matches("[name=note]")) {
    clearTimeout(cartNoteTyping);
  }
});

document.addEventListener("keyup", function(evt) {
  if (evt.target.matches("[name=note]")) {
    const noteField = evt.target;
    clearTimeout(cartNoteTyping);
    cartNoteTyping = setTimeout(function () {
      const currentVal = noteField.value;
      const formData = new FormData();
      formData.append('note', currentVal);
      
      fetch(cartUpdateUrl, {
        method: "POST",
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then(response => response.json())
      .then(result => {})
      .catch(error => console.error('Cart note update error:', error));
    }, 750);
  }
});

if (window.location.pathname.indexOf("/cart") > -1) {
  // Shipping Estimations
  (function () {
    function shippingEstimates() {
      if (Shopify && Shopify.CountryProvinceSelector) {
        var country = document.getElementById("shippingCountry");
        if (!country) {
          return false;
        }
        var shipping = new Shopify.CountryProvinceSelector(
          "shippingCountry",
          "shippingProvince",
          {
            hideElement: "shippingProvinceContainer",
          }
        );
        setupEventListeners();
      }
    }

    // 🚀 VANILLA JS - jQuery removed
    function setupEventListeners() {
      const button = document.getElementById("getShippingEstimates");
      if (button) {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const shippingResponse = document.getElementById("ShippingWrapperResponse");
          if (shippingResponse) {
            shippingResponse.innerHTML = "";
            shippingResponse.classList.remove("success", "error");
            shippingResponse.style.display = "none";
          }
          
          const shippingAddress = {};
          const zipInput = document.getElementById("shippingZip");
          const countryInput = document.getElementById("shippingCountry");
          const provinceInput = document.getElementById("shippingProvince");
          
          shippingAddress.zip = zipInput ? zipInput.value : "";
          shippingAddress.country = countryInput ? countryInput.value : "";
          shippingAddress.province = provinceInput ? provinceInput.value : "";
          _getCartShippingRates(shippingAddress);
        });
      }
    }

    // 🚀 VANILLA JS - jQuery removed, using Fetch API
    var _getCartShippingRates = function (shippingAddress) {
      const formData = new URLSearchParams();
      formData.append('shipping_address[zip]', shippingAddress.zip);
      formData.append('shipping_address[country]', shippingAddress.country);
      formData.append('shipping_address[province]', shippingAddress.province);
      
      fetch("/cart/shipping_rates.json", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(data => Promise.reject(data));
        }
        return response.json();
      })
      .then(data => {
        _render(data.shipping_rates);
      })
      .catch(error => {
        _onError(error);
      });
    };

    var _fullMessagesFromErrors = function (errors) {
      const fullMessages = [];
      Object.keys(errors).forEach(attribute => {
        const messages = errors[attribute];
        messages.forEach(message => {
          fullMessages.push(message);
        });
      });
      return fullMessages;
    };
    
    var _onError = function (data) {
      const feedback = _fullMessagesFromErrors(data).join(", ") + ".";
      const shippingResponse = document.getElementById("ShippingWrapperResponse");
      if (shippingResponse) {
        shippingResponse.innerHTML = '<p class="error-text">' + feedback + "</p>";
        shippingResponse.classList.add("error");
        shippingResponse.style.display = "block";
      }
    };
    
    var _render = function (response) {
      const shippingResponse = document.getElementById("ShippingWrapperResponse");
      if (!shippingResponse) return;
      
      if (response && response.length > 0) {
        let html = '<p class="success-text">';
        response.forEach(function (shipping) {
          html += `<span><strong>${
            shipping.name
          }:</strong>${Shopify.formatMoney(
            shipping.price * 100,
            moneyFormat
          )}</span>`;
        });
        html += "</p>";
        shippingResponse.innerHTML = html;
        shippingResponse.classList.add("success");
        shippingResponse.style.display = "block";
      } else {
        shippingResponse.innerHTML = '<p class="error-text">' + notAvailableLabel + "</p>";
        shippingResponse.classList.add("error");
        shippingResponse.style.display = "block";
      }
    };
    // 🚀 VANILLA JS - jQuery removed
    setTimeout(function () {
      shippingEstimates();
      fetch(mainCartUrl + '.json')
        .then(response => response.json())
        .then(result => {
          if (result.item_count > 0) {
            freeShippingBar(result);
            upsellCartProducts(result);
          }
        })
        .catch(error => console.error('Cart fetch error:', error));
    }, 500);
    window.shippingEstimates = shippingEstimates;
  })();
  // Update quantity based on input on change

  // 🚀 VANILLA JS - jQuery removed, using Fetch API
  changeCartItem = function (line, quantity) {
    const formData = new URLSearchParams();
    formData.append('quantity', quantity);
    formData.append('line', line);
    
    fetch(cartChangeUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: formData
    })
    .then(response => response.json())
    .then(cart => {
      if (cart.item_count == 0) {
        emptyCartStatus = true;
        document.querySelectorAll("[data-cart-count]").forEach(el => {
          el.style.display = "none";
        });
      } else {
        emptyCartStatus = false;
        cartItemsCount = cart.item_count;
        if (favicon) {
          favicon.badge(cartItemsCount);
        }
        document.querySelectorAll("[data-cart-count]").forEach(el => {
          el.style.display = "block";
        });

        const item = cart.items[line - 1];
        if (item) {
          const input = document.querySelector(`[name="updates[]"][data-line="${line}"]`);
          if (input) {
            input.value = item.quantity;
          }
        }
      }
      cartPageUpdate(cart);
    })
    .catch(error => {
      // Error handling - fetch cart data again
      fetch(cartUrl + '.json')
        .then(response => response.json())
        .then(cart => {
          if (quantity == 0) {
            const input = document.querySelector(`[name="updates[]"][data-line="${line}"]`);
            if (input) {
              const row = input.closest("tr");
              if (row) row.remove();
            }
          }
          cartItemsCount = cart.item_count;
          if (favicon) {
            favicon.badge(cartItemsCount);
          }
          if (cart.item_count == 0) {
            document.querySelectorAll("[data-cart-count]").forEach(el => {
              el.style.display = "none";
            });
          } else {
            document.querySelectorAll("[data-cart-count]").forEach(el => {
              el.style.display = "block";
            });

            const item = cart.items[line - 1];
            if (item) {
              const input = document.querySelector(`[name="updates[]"][data-line="${line}"]`);
              if (input) {
                input.value = item.quantity;
              }
            }
          }
          cartPageUpdate(cart);
        });
    });
  };

  // 🚀 VANILLA JS - jQuery removed
  document.addEventListener("click", function(evt) {
    const el = evt.target.closest(".line_item_change");
    if (el) {
      evt.preventDefault();
      const line = el.dataset.line;
      const parent = el.closest("tr");
      const qtySelector = el.parentElement.querySelector('input[name="updates[]"]');
      const step = qtySelector ? qtySelector.getAttribute('step') : '1';
      const errorEl = document.getElementById("cartItemError-" + line);
      if (errorEl) {
        errorEl.innerHTML = "";
      }
      let qty = parseInt(qtySelector.value.replace(/\D/g, ""));
      parent.classList.add("disabled");
      const cartItems = parent.closest("[data-cart-items]");
      if (cartItems) {
        cartItems.classList.add("disabled");
      }
      qty = validateQty(qty);
      if (el.classList.contains("quantity-up")) {
        qty += parseInt(step);
      } else {
        qty -= parseInt(step);
        if (qty <= 0) qty = 0;
      }
      qtySelector.value = qty;
      if (line) {
        changeCartItem(line, qty);
      }
    }
  });
  // 🚀 VANILLA JS - jQuery removed
  document.addEventListener("change", function(evt) {
    if (evt.target.matches('[name="updates[]"]')) {
      evt.preventDefault();
      const el = evt.target;
      const line = el.dataset.line;
      const parent = el.closest("tr");
      let qty = parseInt(el.value.replace(/\D/g, ""));
      parent.classList.add("disabled");
      const cartItems = parent.closest("[data-cart-items]");
      if (cartItems) {
        cartItems.classList.add("disabled");
      }
      const errorEl = document.getElementById("cartItemError-" + line);
      if (errorEl) {
        errorEl.innerHTML = "";
      }
      qty = validateQty(qty);
      // Add or subtract from the current quantity
      if (line) {
        changeCartItem(line, qty);
      }
    }
  });

  // 🚀 VANILLA JS - jQuery removed
  document.addEventListener("click", function(evt) {
    const el = evt.target.closest(".line_item_remove");
    if (el) {
      evt.preventDefault();
      const parent = el.closest("tr");
      const line = el.dataset.line;
      // If it has a data-line, update the cart
      if (line) {
        parent.classList.add("disabled");
        const cartItems = parent.closest("[data-cart-items]");
        if (cartItems) {
          cartItems.classList.add("disabled");
        }
        changeCartItem(line, 0);
      }
    }
  });
} else {
  // POST to cart/change.js returns the cart in JSON
  // 🚀 VANILLA JS - jQuery removed, using Fetch API
  changeItem = function (line, quantity, callback) {
    const formData = new URLSearchParams();
    formData.append('quantity', quantity);
    formData.append('line', line);
    
    fetch(cartChangeUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: formData
    })
    .then(response => response.json())
    .then(cart => {
      if (cart.item_count == 0) {
        emptyCartStatus = true;
        document.querySelectorAll("[data-cart-count]").forEach(el => {
          el.style.display = "none";
        });
      } else {
        emptyCartStatus = false;
        document.querySelectorAll("[data-cart-count]").forEach(el => {
          el.style.display = "block";
        });
      }
      const item = cart.items[line - 1];
      if (item) {
        const qtyInput = document.querySelector(
          '.ajaxcart__qty-num[name="updates[]"][data-line="' + line + '"]'
        );
        if (qtyInput) {
          qtyInput.value = item.quantity;
        }
      }
      callback(cart);
    })
    .catch(error => {
      fetch(cartUrl + '.json')
        .then(response => response.json())
        .then(cart => {
          callback(cart);
        });
    });
  };

  updateQuantity = function (line, qty, callback) {
    isUpdating = true;
    setTimeout(function () {
      changeItem(line, qty, callback);
    }, 250);
  };

  // 🚀 VANILLA JS - jQuery removed
  function getvaluefromdataattribute(name) {
    const input = document.querySelector('input[data-attr="' + name + '"]');
    return input ? input.value : '';
  }

  // 🚀 VANILLA JS - jQuery removed
  const recipientCheckbox = document.getElementById("Recipient-Checkbox");
  if (recipientCheckbox) {
    recipientCheckbox.addEventListener("click", function() {
      if (!this.checked) {
        const emailInput = document.querySelector('input[data-attr="email"]');
        const nameInput = document.querySelector('input[data-attr="name"]');
        if (emailInput) emailInput.value = "";
        if (nameInput) nameInput.value = "";
      }
    });
  }

  if (cartDrawerEnable) {
    // POST to cart/add.js returns the cart in JSON
    // 🚀 VANILLA JS - jQuery removed, using Fetch API
    document.body.addEventListener("click", function(evt) {
      const submit = evt.target.closest(".Sd_addProduct");
      if (submit) {
        evt.preventDefault();
        const form = submit.closest("form");
        if (!form.closest(".yv_side_drawer_wrapper")) {
          focusElement = submit;
        }
        const parentSection = form.closest(".shopify-section");
        const emailInput = document.querySelector('input[data-attr="email"]');
        const nameInput = document.querySelector('input[data-attr="name"]');
        let Email = emailInput ? emailInput.value : '';
        if (emailInput) emailInput.value = "";
        if (nameInput) nameInput.value = "";
        
        const productErrors = parentSection ? parentSection.querySelector(".productErrors") : null;
        if (productErrors) {
          productErrors.style.display = "none";
          productErrors.innerHTML = "";
        }
        submit.classList.add("is-loading");
        
        if (!form.closest(".yv_side_drawer_wrapper")) {
          const drawerBody = document.querySelector("[data-drawer-body]");
          const sideDrawer = document.body.querySelector("[data-side-drawer]");
          const drawerTitle = document.body.querySelector("[data-drawer-title]");
          
          if (drawerBody) drawerBody.innerHTML = preLoadLoadGif;
          if (sideDrawer) {
            sideDrawer.setAttribute("class", "yv_side_drawer_wrapper");
            sideDrawer.setAttribute("id", "mini__cart");
            sideDrawer.classList.add("mini_cart");
          }
          if (drawerTitle) drawerTitle.innerHTML = cartTitleLabel;
        }
        
        const formData = new FormData(form);
        
        fetch(cartAddUrl, {
          method: "POST",
          body: formData,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then(response => response.json())
        .then(line_item => {
          const quickAddPopup = form.closest(".quick-add-popup");
          if (quickAddPopup) {
            quickAddPopup.classList.remove('show');
            const quickAddBody = form.closest("[quick-add-body]");
            if (quickAddBody) quickAddBody.innerHTML = '';
            document.body.classList.remove('quick-add-popup-open');
          }
          if (form.closest(".yv_side_drawer_wrapper")) {
            const drawerBody = document.querySelector("[data-drawer-body]");
            const sideDrawer = document.body.querySelector("[data-side-drawer]");
            const drawerTitle = document.body.querySelector("[data-drawer-title]");
            
            if (drawerBody) drawerBody.innerHTML = preLoadLoadGif;
            if (sideDrawer) {
              sideDrawer.setAttribute("class", "yv_side_drawer_wrapper");
              sideDrawer.setAttribute("id", "mini__cart");
              sideDrawer.classList.add("mini_cart");
            }
            if (drawerTitle) drawerTitle.innerHTML = cartTitleLabel;
          }
          document.body.classList.remove("quickview-open");
          document.body.classList.add("side_Drawer_open");
          
          if(document.getElementById('addToCartAlert')){
            document.getElementById('addToCartAlert').play();
          }
          if(hapticFeedbackStatus){
            const canVibrate = window.navigator.vibrate;
            if (canVibrate) window.navigator.vibrate(500);
          }
          
          fetch(cartUrl + '.json')
            .then(response => response.json())
            .then(cart => {
              buildCart(cart, true);
              setTimeout(function () {
                submit.classList.remove("is-loading");
              }, 1000);
            });
        })
        .catch(error => {
          focusElement = "";
          if (typeof errorCallback === "function") {
            errorCallback(error, 'error');
          } else {
            const errorContainer = parentSection ? parentSection.querySelector(".productErrors") : null;
            if (errorContainer && error.responseJSON) {
              if(error.responseJSON.errors){
                const giftCardWrapper = form.querySelector('[data-gift-card-box]');
                if(giftCardWrapper && error.responseJSON.errors['email']){
                  const giftCardEmail = giftCardWrapper.querySelector('[type=email]');
                  if (giftCardEmail) {
                    errorContainer.innerHTML = giftCardEmail.getAttribute('data-attr') +' '+  error.responseJSON.errors['email'];
                  }
                  errorContainer.style.display = "block";
                }
              }
              else if(error.responseJSON.description){
                errorContainer.innerHTML = error.responseJSON.description;
                errorContainer.style.display = "block";
              }
            }
          }
          setTimeout(function () {
            const stickyButton = document.querySelector(".Sd_addProductSticky");
            if (stickyButton) stickyButton.classList.remove("is-loading");
            submit.classList.remove("is-loading");
          }, 1000);
        });
      }
    });

    // Update quantity based on input on change
    // 🚀 VANILLA JS - jQuery removed
    document.addEventListener("click", function(evt) {
      const el = evt.target.closest(".quantity-button");
      if (el) {
        evt.preventDefault();
        const parent = el.closest(".media-link");
        const line = el.dataset.line;
        const quantityContainer = el.closest(".quantity");
        const qtySelector = quantityContainer ? quantityContainer.querySelector(".ajaxcart__qty-num") : null;
        const stepInput = quantityContainer ? quantityContainer.querySelector('input[name="updates[]"]') : null;
        const step = stepInput ? stepInput.getAttribute('step') : '1';
        
        let qty = qtySelector ? qtySelector.value : '1';
        parent.classList.add("disabled");
        const cartWrapper = parent.closest(".cart-items-wrapper");
        if (cartWrapper) {
          cartWrapper.classList.add("disabled");
        }
        if (qty) {
          qty = parseInt(qty.replace(/\D/g, ""));
        }
        qty = validateQty(qty);
        // Add or subtract from the current quantity
        if (el.classList.contains("ajaxcart__qty--plus")) {
          qty += parseInt(step);
        } else {
          qty -= parseInt(step);
          if (qty <= 0) qty = 0;
        }
        if (qtySelector) {
          qtySelector.value = qty;
        }
        if (line) {
          updateQuantity(line, qty, buildCart);
        }
      }
    });

    // Update quantity based on input on change
    // 🚀 VANILLA JS - jQuery removed
    document.addEventListener("change", function(evt) {
      if (evt.target.matches(".ajaxcart__qty-num")) {
        evt.preventDefault();
        const el = evt.target;
        const parent = el.closest(".media-link");
        const line = el.dataset.line;
        let qty = parseInt(el.value.replace(/\D/g, ""));
        parent.classList.add("disabled");
        const cartWrapper = parent.closest(".cart-items-wrapper");
        if (cartWrapper) {
          cartWrapper.classList.add("disabled");
        }
        qty = validateQty(qty);
        // If it has a data-line, update the cart
        if (line) {
          updateQuantity(line, qty, buildCart);
        }
      }
    });

    // 🚀 VANILLA JS - jQuery removed
    function openCartDrawer(element) {
      const drawerBody = document.querySelector("[data-drawer-body]");
      const drawerTitle = document.body.querySelector("[data-drawer-title]");
      const sideDrawer = document.body.querySelector("[data-side-drawer]");
      
      if (drawerBody) drawerBody.innerHTML = preLoadLoadGif;
      if (drawerTitle) drawerTitle.innerHTML = cartTitleLabel;
      if (sideDrawer) {
        sideDrawer.setAttribute("class", "yv_side_drawer_wrapper");
        sideDrawer.setAttribute("id", "mini__cart");
        sideDrawer.classList.add("mini_cart");
      }
      document.body.classList.add("side_Drawer_open");
      
      fetch(cartUrl + '.json')
        .then(response => response.json())
        .then(cart => {
          buildCart(cart, true, element);
        });
    }
    
    // 🚀 VANILLA JS - jQuery removed
    document.body.addEventListener("click", function(e) {
      const opener = e.target.closest(".openCartDrawer");
      if (opener) {
        e.preventDefault();
        openCartDrawer(opener);
      }
    }); 

    // 🚀 VANILLA JS - jQuery removed
    document.body.addEventListener("keydown", function(e) {
      if (e.target.matches(".openCartDrawer")) {
        console.log('click cart drawer');
        if (e.code.toUpperCase() === "SPACE") {
          e.preventDefault();
          openCartDrawer(e.target);         
        }
      }
    });

    // 🚀 VANILLA JS - jQuery removed
    document.addEventListener("click", function(evt) {
      const el = evt.target.closest(".sd_mini_removeproduct");
      if (el) {
        evt.preventDefault();
        const parent = el.closest(".media-link");
        const line = parseInt(el.getAttribute("data-line"));
        parent.classList.add("disabled");
        const cartWrapper = parent.closest(".cart-items-wrapper");
        if (cartWrapper) {
          cartWrapper.classList.add("disabled");
        }
        // If it has a data-line, update the cart
        if (line) {
          updateQuantity(line, 0, buildCart);
        }
      }
    });

    // 🚀 VANILLA JS - jQuery removed
    document.addEventListener("click", function(evt) {
      const noteButton = evt.target.closest(".cartDrawerNote");
      if (noteButton) {
        noteButton.classList.toggle("active");
        const textArea = noteButton.parentElement.querySelector(".cartNoteContainer");
        if (textArea) {
          // Simple slideToggle replacement
          if (textArea.style.display === "none" || !textArea.style.display) {
            textArea.style.display = "block";
          } else {
            textArea.style.display = "none";
          }
        }
      }
    });
  }
}

// 🚀 VANILLA JS - jQuery removed, using Fetch API
document.body.addEventListener("click", function(evt) {
  const giftWrap = evt.target.closest("#GiftWrapProduct");
  if (giftWrap) {
    const productId = parseInt(giftWrap.getAttribute("data-product"));
    const formData = new FormData();
    formData.append('id', productId);
    formData.append('quantity', 1);
    
    fetch(cartAddUrl, {
      method: "POST",
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => response.json())
    .then(line_item => {
      fetch(cartUrl + '.json')
        .then(response => response.json())
        .then(cart => {
          if (window.location.pathname.indexOf("/cart") > -1) {
            cartPageUpdate(cart);
          } else {
            buildCart(cart, true);
          }
        });
    })
    .catch(error => {
      fetch(cartUrl + '.json')
        .then(response => response.json())
        .then(cart => {
          if (window.location.pathname.indexOf("/cart") > -1) {
            buildCart(cart, true);
          } else {
            cartPageUpdate(cart);
          }
        });
    });
  }
});

// 🚀 VANILLA JS - jQuery removed, using Fetch API
cartPageUpdate = function (cart) {
  fetch(mainCartUrl, {
    method: "GET",
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
  .then(response => response.text())
  .then(result => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = result;
    const newCartWrapper = tempDiv.querySelector("[data-cart-wrapper]");
    const currentCartWrapper = document.body.querySelector("[data-cart-wrapper]");
    
    if (currentCartWrapper && newCartWrapper) {
      currentCartWrapper.innerHTML = newCartWrapper.innerHTML;
    }
    
    const cartSection = document.querySelector(".cart-section");
    if (cartSection) {
      const firstLink = cartSection.querySelector("a");
      if (firstLink) firstLink.focus();
    }
    
    freeShippingBar(cart);
    upsellCartProducts(cart);
    
    if (window.shippingEstimates) {
      window.shippingEstimates();
    }
    
    if (animationStatus) {
      if (AOS) {
        AOS.refreshHard();
      }
    }
  });
};

// 🚀 VANILLA JS - jQuery removed, using Fetch API
buildCart = function (cart, showCart, element) {
  if (cart.item_count === 0) {
    emptyCartStatus = true;
    document.querySelectorAll("[data-cart-count]").forEach(el => {
      el.style.display = "none";
    });
  } else {
    emptyCartStatus = false;
    document.querySelectorAll("[data-cart-count]").forEach(el => {
      el.style.display = "block";
    });
  }
  cartItemsCount = cart.item_count;
  
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    if(cartItemsCount > 0 && cartItemsCount < 100){
      el.textContent = cart.item_count;
    }
    else{
      el.textContent = '';
    }
  });
  
  if (favicon) {
    favicon.badge(cartItemsCount);
  }
  
  const drawerBody = document.querySelector("[data-drawer-body]");
  if (drawerBody) {
    fetch(mainCartUrl + "?view=jsonData")
      .then(response => response.text())
      .then(html => {
        drawerBody.innerHTML = html;
        freeShippingBar(cart);
        upsellCartDrawerProducts(cart,'drawer');
        
        setTimeout(function () {
          if(document.body.classList.contains("yv_side_Drawer_open")){
            const drawerHeader = document.querySelector("[data-drawer-side-header]");
            if (drawerHeader) {
              const upsellDrawer = drawerHeader.closest(".yv-upsell-drawer");
              if (upsellDrawer) {
                upsellDrawer.classList.add("active");
              }
            }
          }
        }, 1500);
        
        if (showCart) {
          document.body.classList.add("yv_side_Drawer_open");
          const wrapperOverlay = document.querySelector(".wrapper-overlay");
          if (wrapperOverlay) {
            wrapperOverlay.style.display = "block";
          }
          const sideDrawer = document.querySelector("[data-side-drawer]");
          if (sideDrawer) {
            focusElementsRotation(sideDrawer);
          }
          if (element) {
            focusElement = element;
          }
          const drawerWrapper = document.querySelector(".yv_side_drawer_wrapper");
          if (drawerWrapper) {
            drawerWrapper.focus();
          }
        }
        
        if (animationStatus) {
          if (AOS) {
            AOS.refreshHard();
          }
        }
      });
  }
};

// 🚀 VANILLA JS - jQuery removed
document.addEventListener("click", function(evt) {
  const header = evt.target.closest("[data-drawer-side-header]");
  if (header) {
    const upsellDrawer = header.closest(".yv-upsell-drawer");
    if (upsellDrawer) {
      upsellDrawer.classList.toggle('active');
    }
  }
});

function upsellCartDrawerProducts(cart) {
  if(cart.item_count != 0){
    if(document.querySelector("[data-drawer-side-content]")){
      let upsellContainer=document.querySelector("[data-drawer-side-content]");
      let intent=upsellContainer.getAttribute("data-related-products");
      if(intent != "product-list"){
        let productId=cart.items[0].product_id; 
        let limit=upsellContainer.getAttribute("data-limit");
        fetch(window.Shopify.routes.root + "recommendations/products?product_id="+productId+"&limit="+limit+"&section_id=upsell-products&intent="+intent)
         .then(response => response.text())
         .then((text) => {
            const html = document.createElement('div');
            html.innerHTML = text;
            const recommendations = html.querySelector('#product-recommendations');
            if (recommendations && recommendations.innerHTML.trim().length) {
               upsellContainer.innerHTML = recommendations.innerHTML;
                document.querySelector(".yv-upsell-drawer").classList.remove('hidden')
            }else{
              document.querySelector(".yv-upsell-drawer").classList.add('hidden')
            }
         });
      }
      else{
        if(upsellContainer.children.length > 0){
          document.querySelector(".yv-upsell-drawer").classList.remove('hidden')
        }
        else{
          document.querySelector(".yv-upsell-drawer").classList.add('hidden')
        }
      }
    }  
  }
}

function upsellCartProducts(cart) {
  if(cart.item_count != 0){
    if(document.querySelector("[data-cart-upsell-wrapper]")){
      let upsellWrapper=document.querySelector("[data-cart-upsell-wrapper]");
      let upsellContainer=upsellWrapper.querySelector("[data-cart-upsell]");
      let intent=upsellWrapper.getAttribute("data-related-products");
      if(intent != "product-list"){
        let productId=cart.items[0].product_id; 
        let limit=upsellWrapper.getAttribute("data-limit");
        fetch(window.Shopify.routes.root + "recommendations/products?product_id="+productId+"&limit="+limit+"&section_id=upsell-products&intent="+intent)
         .then(response => response.text())
         .then((text) => {
            const html = document.createElement('div');
            html.innerHTML = text;
            const recommendations = html.querySelector('#product-recommendations');
            if (recommendations && recommendations.innerHTML.trim().length) {
              if(window.innerWidth >= 768 ){
                if(upsellContainer.classList.contains('flickity-enabled')){
                  let slider = Flickity.data(upsellContainer);
                  if(slider){
                    slider.destroy();
                     upsellContainer.innerHTML = recommendations.innerHTML;
                    upsellWrapper.classList.remove('hidden')
                    // Note: flickitySlider may still need jQuery internally
                    if (typeof jQuery !== 'undefined') {
                      flickitySlider(jQuery(upsellContainer));
                    }
                  }
                }
                else{
                  upsellContainer.innerHTML = recommendations.innerHTML;
                  upsellWrapper.classList.remove('hidden')
                  // Note: flickitySlider may still need jQuery internally
                  if (typeof jQuery !== 'undefined') {
                    flickitySlider(jQuery(upsellContainer));
                  }
                }
              }
              else{
                upsellContainer.innerHTML = recommendations.innerHTML;
                upsellWrapper.classList.remove('hidden')
              }
            }else{
              upsellWrapper.classList.add('hidden')
            }
         });
      }
      else{
        if(upsellContainer.classList.contains('flickity-enabled')){
            let slider = Flickity.data(upsellContainer);
            if(slider){
              slider.destroy();
            }
        }
        if(upsellContainer.children.length > 0){
          if(window.innerWidth >= 768 ){
              upsellWrapper.classList.remove('hidden')
              // Note: flickitySlider may still need jQuery internally
              if (typeof jQuery !== 'undefined') {
                flickitySlider(jQuery(upsellContainer));
              }
          }
          else{
              upsellWrapper.classList.remove('hidden')
          }
        }
        else{
          upsellWrapper.classList.add('hidden')
        }
      }
    }  
  }
}
