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

  changeCartItem = function (line, quantity) {
    var params = {
      type: "POST",
      url: cartChangeUrl,
      data: "quantity=" + quantity + "&line=" + line,
      dataType: "json",
      success: function (cart) {
        // if (quantity == 0) {
        //     $('[name="updates[]"][data-line="' + line + '"]').closest('tr').remove();
        // }
        if (cart.item_count == 0) {
          emptyCartStatus = true;
          // $('[data-cart-form]').hide();
          // $('[data-cart-empty]').show();
          $("[data-cart-count]").hide();
        } else {
          emptyCartStatus = false;
          cartItemsCount = cart.item_count;
          if (favicon) {
            favicon.badge(cartItemsCount);
          }
          $("[data-cart-count]").show();

          var item = cart.items[line - 1];
          if (item) {
            $('[name="updates[]"][data-line="' + line + '"]').val(
              item.quantity
            );
          }
        }
        cartPageUpdate(cart);
      },
      error: function (XMLHttpRequest, textStatus) {
        jQuery.getJSON(cartUrl, function (cart, textStatus) {
          if (quantity == 0) {
            $('[name="updates[]"][data-line="' + line + '"]')
              .closest("tr")
              .remove();
          }
          cartItemsCount = cart.item_count;
          if (favicon) {
            favicon.badge(cartItemsCount);
          }
          if (cart.item_count == 0) {
            // $('[data-cart-form]').hide();
            // $('[data-cart-empty]').show();
            $("[data-cart-count]").hide();
          } else {
            $("[data-cart-count]").show();

            var item = cart.items[line - 1];
            if (item) {
              $('[name="updates[]"][data-line="' + line + '"]').val(
                item.quantity
              );
            }
          }
          cartPageUpdate(cart);
        });
      },
    };
    jQuery.ajax(params);
  };

  $(document).on("click", ".line_item_change", function (evt) {
    evt.preventDefault();
    var $el = $(this),
      line = $el.data("line"),
      parent = $el.closest("tr"),
      $qtySelector = $el.siblings('input[name="updates[]"]'),
      $step = $el.siblings('input[name="updates[]"]').attr('step');
      $("#cartItemError-" + line).html("");
      var qty = parseInt($qtySelector.val().replace(/\D/g, ""));
      parent.addClass("disabled");
      parent.closest("[data-cart-items]").addClass("disabled");
      var qty = validateQty(qty);
      if ($el.hasClass("quantity-up")) {
        qty += parseInt($step);
      } else {
        qty -= parseInt($step);
        if (qty <= 0) qty = 0;
      }
    $qtySelector.val(qty);
    if (line) {
      changeCartItem(line, qty);
    }
  });
  $(document).on("change", '[name="updates[]"]', function (evt) {
    evt.preventDefault();
    var $el = $(this),
    line = $el.data("line"),
    parent = $el.closest("tr"),
    qty = parseInt($el.val().replace(/\D/g, ""));
    parent.addClass("disabled");
    parent.closest("[data-cart-items]").addClass("disabled");
    $("#cartItemError-" + line).html("");
    qty = validateQty(qty);
    // Add or subtract from the current quantity
    if (line) {
      changeCartItem(line, qty);
    }
  });

  $(document).on("click", ".line_item_remove", function (evt) {
    evt.preventDefault();
    var $el = $(this),
    parent = $el.closest("tr"),
    line = $el.data("line");
    // If it has a data-line, update the cart
    if (line) {
      parent.addClass("disabled");
      parent.closest("[data-cart-items]").addClass("disabled");
      changeCartItem(line, 0);
    }
  });
} else {
  // POST to cart/change.js returns the cart in JSON
  changeItem = function (line, quantity, callback) {
    var $body = $(document.body),
      params = {
        type: "POST",
        url: cartChangeUrl,
        data: "quantity=" + quantity + "&line=" + line,
        dataType: "json",
        success: function (cart) {
          if (cart.item_count == 0) {
            emptyCartStatus = true;
            $("[data-cart-count]").hide();
          } else {
            emptyCartStatus = false;
            $("[data-cart-count]").show();
          }
          var item = cart.items[line - 1];
          if (item) {
            $(
              '.ajaxcart__qty-num[name="updates[]"][data-line="' + line + '"]'
            ).val(item.quantity);
          }
          callback(cart);
        },
        error: function (XMLHttpRequest, textStatus) {
          jQuery.getJSON(cartUrl, function (cart, textStatus) {
            callback(cart);
          });
        },
      };
    jQuery.ajax(params);
  };

  updateQuantity = function (line, qty, callback) {
    isUpdating = true;
    setTimeout(function () {
      changeItem(line, qty, callback);
    }, 250);
  };

  function getvaluefromdataattribute(name) {
    return $('input[data-attr="' + name + '"]').val();
  }

  $("#Recipient-Checkbox").click(function () {
    if (!this.checked) {
      $('input[data-attr="' + "email" + '"]').val("");
      $('input[data-attr="' + "name" + '"]').val("");
    }
  });

  if (cartDrawerEnable) {
    // POST to cart/add.js returns the cart in JSON
    $("body").on("click", ".Sd_addProduct", function (evt) {
      evt.preventDefault();
      let submit = $(this);
      let form = $(this).closest("form");
      // if (submit.hasClass("Sd_addProductSticky")) {
      //   form = jQuery("#" + submit.attr("form"));
      // }
      if (form.closest(".yv_side_drawer_wrapper").length == 0) {
        focusElement = submit;
      }
      let parentSection = form.closest(".shopify-section");
      var Email = $('input[data-attr="' + "email" + '"]').val();
      $('input[data-attr="' + "email" + '"]').val("");
      $('input[data-attr="' + "name" + '"]').val("");
      parentSection.find(".productErrors").hide().html("");
      submit.addClass("is-loading");
      if (form.closest(".yv_side_drawer_wrapper").length == 0) {
        $("[data-drawer-body]").html(preLoadLoadGif);
        $("body")
          .find("[data-side-drawer]")
          .attr("class", "yv_side_drawer_wrapper");
        $("body").find("[data-drawer-title]").html(cartTitleLabel);
        $("body").find("[data-side-drawer]").attr("id", "mini__cart");
        $("body").find("[data-side-drawer]").addClass("mini_cart");
      }
      params = {
        type: "POST",
        url: cartAddUrl,
        data: form.serialize(),
        dataType: "json",
        success: function (line_item) {
          if (form.closest(".quick-add-popup").length > 0) {
            form.closest(".quick-add-popup")[0].classList.remove('show');
            form.closest("[quick-add-body]")[0].innerHTML = '';
            document.body.classList.remove('quick-add-popup-open');
          }
          if (form.closest(".yv_side_drawer_wrapper").length > 0) {
            $("[data-drawer-body]").html(preLoadLoadGif);
            $("body")
              .find("[data-side-drawer]")
              .attr("class", "yv_side_drawer_wrapper");
            $("body").find("[data-drawer-title]").html(cartTitleLabel);
            $("body").find("[data-side-drawer]").attr("id", "mini__cart");
            $("body").find("[data-side-drawer]").addClass("mini_cart");
          }
          $("body").removeClass("quickview-open");
          $("body").addClass("side_Drawer_open");
          if(document.getElementById('addToCartAlert')){
            document.getElementById('addToCartAlert').play();
          }
          if(hapticFeedbackStatus){
            const canVibrate = window.navigator.vibrate;
            if (canVibrate) window.navigator.vibrate(500);
          }
          jQuery.getJSON(cartUrl, function (cart, textStatus) {
            buildCart(cart, true);
            setTimeout(function () {
              submit.removeClass("is-loading");
            }, 1000);
          });
        },
        error: function (XMLHttpRequest, textStatus) {
          focusElement = "";
          if (typeof errorCallback === "function") {
            errorCallback(XMLHttpRequest, textStatus);
          } else {
            let errorContainer = parentSection.find(".productErrors");
            if (errorContainer.length > 0) {
              if(XMLHttpRequest.responseJSON.errors){
                let giftCardWrapper = form.find('[data-gift-card-box]');
                if(giftCardWrapper.length > 0 && XMLHttpRequest.responseJSON.errors['email']){
                  let errormessageWrapper = giftCardWrapper.find('[data-gift-card-errors]');
                  let giftCardEmail = giftCardWrapper.find('[type=email]');
                  errorContainer.html(giftCardEmail.attr('data-attr') +' '+  XMLHttpRequest.responseJSON.errors['email']).show();
                }
              }
              else{
                errorContainer.html(XMLHttpRequest.responseJSON.description).show();
              }
            }
          }
          setTimeout(function () {
            $(".Sd_addProductSticky").removeClass("is-loading");
            submit.removeClass("is-loading");
          }, 1000);
        },
      };
      jQuery.ajax(params);
    });

    // Update quantity based on input on change

    $(document).on("click", ".quantity-button", function (evt) {
      evt.preventDefault();
      var $el = $(this),
      parent = $el.closest(".media-link"),
      line = $el.data("line"),
      $qtySelector = $el.closest(".quantity").find(".ajaxcart__qty-num"),
      $step = $el.closest(".quantity").find('input[name="updates[]"]').attr('step');
      var qty = $qtySelector.val();
      parent.addClass("disabled");
      parent.closest(".cart-items-wrapper").addClass("disabled");
      if (qty) {
        qty = parseInt(qty.replace(/\D/g, ""));
      }
      var qty = validateQty(qty);
      // Add or subtract from the current quantity
      if ($el.hasClass("ajaxcart__qty--plus")) {
        qty += parseInt($step);
      } else {
        qty -= parseInt($step);
        if (qty <= 0) qty = 0;
      }
      $qtySelector.val(qty);
      if (line) {
        updateQuantity(line, qty, buildCart);
      }
    });

    // Update quantity based on input on change
    $(document).on("change", ".ajaxcart__qty-num", function (evt) {
      evt.preventDefault();
      var $el = $(this),
      parent = $el.closest(".media-link"),
      line = $el.data("line"),
      qty = parseInt($el.val().replace(/\D/g, ""));
      parent.addClass("disabled");
      parent.closest(".cart-items-wrapper").addClass("disabled");
      var qty = validateQty(qty);
      // If it has a data-line, update the cart
      if (line) {
        updateQuantity(line, qty, buildCart);
      }
    });

    function openCartDrawer(element) {
      $("[data-drawer-body]").html(preLoadLoadGif);
      $("body").find("[data-drawer-title]").html(cartTitleLabel);
      $("body")
        .find("[data-side-drawer]")
        .attr("class", "yv_side_drawer_wrapper");
      $("body")
        .find("[data-side-drawer]")
        .attr("id", "mini__cart")
        .addClass("mini_cart");
      $("body").addClass("side_Drawer_open");
      jQuery.getJSON(cartUrl, function (cart, textStatus) {
        buildCart(cart, true, element);
      });
    }
    $("body").on("click", ".openCartDrawer", function (e) {
      e.preventDefault();
      openCartDrawer($(this));
    }); 

    $("body").on("keydown", ".openCartDrawer", function (e) {
      console.log('click cart drawer');
      if (e.code.toUpperCase() === "SPACE") {
        e.preventDefault();
        openCartDrawer($(this));         
      }
    });

    $(document).on("click", ".sd_mini_removeproduct", function (evt) {
      evt.preventDefault();
      var $el = $(this),
        parent = $el.closest(".media-link"),
        line = parseInt($el.attr("data-line"));
      parent.addClass("disabled");
      parent.closest(".cart-items-wrapper").addClass("disabled");
      // If it has a data-line, update the cart
      if (line) {
        updateQuantity(line, 0, buildCart);
      }
    });

    $(document).on("click ", ".cartDrawerNote", function (evt) {
      $(this).toggleClass("active");
      var textArea = $(this).siblings(".cartNoteContainer");
      textArea.slideToggle();
    });
  }
}

$("body").on("click", "#GiftWrapProduct", function () {
  params = {
    type: "POST",
    url: cartAddUrl,
    data: { id: parseInt($(this).attr("data-product")), quantity: 1 },
    dataType: "json",
    success: function (line_item) {
      jQuery.getJSON(cartUrl, function (cart, textStatus) {
        if (window.location.pathname.indexOf("/cart") > -1) {
          cartPageUpdate(cart);
        } else {
          buildCart(cart, true);
        }
      });
    },
    error: function (XMLHttpRequest, textStatus) {
      jQuery.getJSON(cartUrl, function (cart, textStatus) {
        if (window.location.pathname.indexOf("/cart") > -1) {
          buildCart(cart, true);
        } else {
          cartPageUpdate(cart);
        }
      });
    },
  };
  jQuery.ajax(params);
});

cartPageUpdate = function (cart) {
  $.ajax({
    url: mainCartUrl,
    type: "GET",
    dataType: "html",
    success: function (result) {
      $("body")
        .find("[data-cart-wrapper]")
        .html($(result).find("[data-cart-wrapper]").html());
      $(".cart-section").find("a:first").trigger("focus");
      freeShippingBar(cart);
     upsellCartProducts(cart)
      window.shippingEstimates();
      if (animationStatus) {
        if (AOS) {
          AOS.refreshHard();
        }
      }
    },
  });
};

buildCart = function (cart, showCart, element) {
  if (cart.item_count === 0) {
    emptyCartStatus = true;
    $("[data-cart-count]").hide();
  } else {
    emptyCartStatus = false;
    $("[data-cart-count]").show();
  }
  cartItemsCount = cart.item_count;
  if(cartItemsCount > 0 && cartItemsCount < 100){
  $('[data-cart-count]').text(cart.item_count);
  }
  else{
    $('[data-cart-count]').text('');
  }
  if (favicon) {
    favicon.badge(cartItemsCount);
  }
  $("[data-drawer-body]").load(mainCartUrl + "?view=jsonData", function () {
    freeShippingBar(cart);
     upsellCartDrawerProducts(cart,'drawer')
    setTimeout(function () {
      if($("body").hasClass("yv_side_Drawer_open")){
        $("[data-drawer-side-header]").closest(".yv-upsell-drawer").addClass("active");
      }
    }, 1500);
    if (showCart) {
      $("body").addClass("yv_side_Drawer_open");
      $(".wrapper-overlay").css({ display: "block" });
      focusElementsRotation($("[data-side-drawer]"));
      if (element) {
        focusElement = element;
      }
      $(document).find(".yv_side_drawer_wrapper").trigger("focus");
    }
    if (animationStatus) {
      if (AOS) {
        AOS.refreshHard();
      }
    }
  });
};

$(document).on("click","[data-drawer-side-header]",function(){
  $(this).closest(".yv-upsell-drawer").toggleClass('active');
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
                    flickitySlider(jQuery(upsellContainer));
                  }
                }
                else{
                  upsellContainer.innerHTML = recommendations.innerHTML;
                  upsellWrapper.classList.remove('hidden')
                  flickitySlider(jQuery(upsellContainer));
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
              flickitySlider(jQuery(upsellContainer));
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
