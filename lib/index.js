/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * 取默认值 多级key
 */
var Proxy2Default = /** @class */ (function () {
    function Proxy2Default(defaultText, options) {
        this.defaultText = '暂无';
        if (typeof defaultText === 'string') {
            this.defaultText = defaultText;
        }
        else {
            this.defaultText = defaultText();
        }
        this.includes = options === null || options === void 0 ? void 0 : options.includes;
        this.excludes = options === null || options === void 0 ? void 0 : options.excludes;
    }
    Proxy2Default.prototype.proxyObj = function (obj, key, options) {
        var _defaultText = '';
        var _includes = (options === null || options === void 0 ? void 0 : options.includes) || this.includes;
        var _excludes = (options === null || options === void 0 ? void 0 : options.excludes) || this.excludes;
        if (typeof (options === null || options === void 0 ? void 0 : options.defaultText) === 'function') {
            _defaultText = options.defaultText();
        }
        else {
            _defaultText = (options === null || options === void 0 ? void 0 : options.defaultText) || this.defaultText;
        }
        /**
         * 如果不是对象
         */
        if (typeof obj !== 'object') {
            if (_excludes === null || _excludes === void 0 ? void 0 : _excludes.includes(obj)) {
                return obj;
            }
            if (_includes === null || _includes === void 0 ? void 0 : _includes.includes(obj)) {
                return _defaultText;
            }
            if (!obj)
                return _defaultText;
            return obj;
        }
        else {
            // 对象取key
            // key 不存在直接给obj返回
            if (!key)
                return __assign({}, obj);
            var _proxyObj = new Proxy(__assign({}, obj), {
                get: function (obj, prop) {
                    if (_excludes === null || _excludes === void 0 ? void 0 : _excludes.includes(obj[prop]))
                        return obj[prop];
                    if (_includes === null || _includes === void 0 ? void 0 : _includes.includes(obj[prop]))
                        return _defaultText;
                    if (!obj[prop])
                        return _defaultText;
                    return obj[prop];
                }
            });
            return _proxyObj[key];
        }
    };
    return Proxy2Default;
}());
var proxyObj = new Proxy2Default('').proxyObj;
// example
// const firstProxy2Default = new Proxy2Deault('暂无', { includes: ['0'] })
// export default firstProxy2Default;

export default Proxy2Default;
export { proxyObj };
//# sourceMappingURL=index.js.map
