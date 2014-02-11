(function () {

    window.$ = function (selector, el) {
        if (!el) {el = document;}
        return (typeof document.querySelector !== 'undefined') ? el.querySelector(selector) : document.getElementByClassName(selector)[0];
    };

    window.$$ = function (selector, el) {
        if (!el) {el = document;}
        return (function () {
            if (typeof document.querySelectorAll !== 'undefined') {
                var data = el.querySelectorAll(selector);
            } else {
                data = document.getElementByClassName(selector.substring(1, selector.length));
            }
            return Array.prototype.slice.call(data);
        }());
    };

}());