"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useDebounce = exports.useTimeout = void 0;
/**
 * Hooks taken or heavily inspired from web dev simplified's useful React hooks video
 * https://github.com/WebDevSimplified/useful-custom-react-hooks
 */
var index_1 = require("./index");
var react_1 = __importDefault(require("react"));
function useTimeout(callback, delay) {
    var callbackRef = react_1["default"].useRef(callback);
    var timeoutRef = react_1["default"].useRef();
    (0, index_1.useSafeEffect)(function () {
        callbackRef.current = callback;
    }, [callback]);
    var set = react_1["default"].useCallback(function () {
        timeoutRef.current = setTimeout(function () { return callbackRef.current(); }, delay);
    }, [delay]);
    var clear = react_1["default"].useCallback(function () {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);
    (0, index_1.useSafeEffect)(function () {
        set();
        return clear;
    }, [delay, set, clear]);
    var reset = react_1["default"].useCallback(function () {
        clear();
        set();
    }, [clear, set]);
    return { reset: reset, clear: clear };
}
exports.useTimeout = useTimeout;
function useDebounce(callback, delay, dependencies) {
    var _a = useTimeout(callback, delay), reset = _a.reset, clear = _a.clear;
    (0, index_1.useSafeEffect)(reset, __spreadArray(__spreadArray([], dependencies, true), [reset], false));
    (0, index_1.useSafeEffect)(clear, []);
}
exports.useDebounce = useDebounce;
