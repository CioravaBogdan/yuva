// 🚀 VANILLA JS HELPERS - Complete jQuery replacement for common.js
// This file provides vanilla JS alternatives for jQuery functions used in common.js

/**
 * Viewport and element visibility helpers
 */

// Check if element is in viewport
function isInViewVanilla(elem) {
    if (!elem) return false;
    
    const viewport_top = window.pageYOffset || document.documentElement.scrollTop;
    const viewport_height = window.innerHeight;
    const viewport_bottom = viewport_top + viewport_height;
    
    const rect = elem.getBoundingClientRect();
    const top = rect.top + viewport_top;
    const height = elem.offsetHeight;
    const bottom = top + height;
    
    return (
        (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    );
}

// Check if element is on screen with offset
function isOnScreenVanilla(elem, form) {
    if (!elem) return false;
    
    const element = typeof elem === 'string' ? document.querySelector(elem) : elem;
    if (!element) return false;
    
    const viewport_top = window.pageYOffset || document.documentElement.scrollTop;
    const viewport_height = window.innerHeight;
    const viewport_bottom = viewport_top + viewport_height;
    
    const rect = element.getBoundingClientRect();
    let top = rect.top + viewport_top;
    
    if (!form && window.innerWidth > 768) {
        top = top + 400;
    }
    
    const height = element.offsetHeight;
    const bottom = top + height;
    
    return (
        (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    );
}

/**
 * Window size helpers
 */
function getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function getWindowHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function isMobile() {
    return getWindowWidth() < 768;
}

function isTablet() {
    const width = getWindowWidth();
    return width >= 768 && width < 992;
}

function isDesktop() {
    return getWindowWidth() >= 992;
}

/**
 * Scroll helpers
 */
function scrollToElement(target, offset = 0) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop + offset;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

/**
 * Element dimension helpers
 */
function getOffset(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        width: rect.width,
        height: rect.height
    };
}

function outerHeight(element, includeMargin = false) {
    if (!element) return 0;
    
    let height = element.offsetHeight;
    
    if (includeMargin) {
        const style = getComputedStyle(element);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    }
    
    return height;
}

function outerWidth(element, includeMargin = false) {
    if (!element) return 0;
    
    let width = element.offsetWidth;
    
    if (includeMargin) {
        const style = getComputedStyle(element);
        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    }
    
    return width;
}

/**
 * Animation helpers
 */
function fadeIn(element, duration = 300, display = 'block') {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.display = display;
    
    let start = null;
    
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const opacity = Math.min(progress / duration, 1);
        
        element.style.opacity = opacity;
        
        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}

function fadeOut(element, duration = 300) {
    if (!element) return;
    
    let start = null;
    const initialOpacity = parseFloat(getComputedStyle(element).opacity) || 1;
    
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const opacity = Math.max(initialOpacity - (progress / duration), 0);
        
        element.style.opacity = opacity;
        
        if (progress < duration) {
            requestAnimationFrame(step);
        } else {
            element.style.display = 'none';
        }
    }
    
    requestAnimationFrame(step);
}

function slideUp(element, duration = 300) {
    if (!element) return;
    
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.style.boxSizing = 'border-box';
    element.style.height = element.offsetHeight + 'px';
    element.offsetHeight; // Force reflow
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    
    setTimeout(() => {
        element.style.display = 'none';
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
    }, duration);
}

function slideDown(element, duration = 300, display = 'block') {
    if (!element) return;
    
    element.style.removeProperty('display');
    let displayValue = window.getComputedStyle(element).display;
    if (displayValue === 'none') displayValue = display;
    element.style.display = displayValue;
    
    const height = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.offsetHeight; // Force reflow
    element.style.boxSizing = 'border-box';
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.style.height = height + 'px';
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
    
    setTimeout(() => {
        element.style.removeProperty('height');
        element.style.removeProperty('overflow');
        element.style.removeProperty('transition-duration');
        element.style.removeProperty('transition-property');
    }, duration);
}

function slideToggle(element, duration = 300) {
    if (!element) return;
    
    if (window.getComputedStyle(element).display === 'none') {
        slideDown(element, duration);
    } else {
        slideUp(element, duration);
    }
}

/**
 * Resize observer helper with throttle
 */
let resizeTimeout;
function onWindowResize(callback, delay = 250) {
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(callback, delay);
    });
}

/**
 * Export for use in other scripts
 */
if (typeof window !== 'undefined') {
    window.VanillaHelpers = {
        isInView: isInViewVanilla,
        isOnScreen: isOnScreenVanilla,
        getWindowWidth,
        getWindowHeight,
        isMobile,
        isTablet,
        isDesktop,
        scrollToElement,
        getScrollTop,
        getOffset,
        outerHeight,
        outerWidth,
        fadeIn,
        fadeOut,
        slideUp,
        slideDown,
        slideToggle,
        onWindowResize
    };
}
