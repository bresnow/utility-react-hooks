"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useIsMounted = exports.useSafeReducer = exports.useSafeCallback = exports.useSafeEffect = void 0;
var react_1 = __importDefault(require("react"));
/**
 * Only uses useLayoutEffect when window is available
 */
exports.useSafeEffect = typeof window !== "undefined" ? react_1["default"].useLayoutEffect : react_1["default"].useEffect;
/**
 *
 * @param callback
 * @returns
 */
function useSafeCallback(callback) {
    var isMounted = useIsMounted();
    return react_1["default"].useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (isMounted.current ? callback.apply(void 0, args) : void 0);
    }, [callback]);
}
exports.useSafeCallback = useSafeCallback;
var useSafeReducer = function (reducer, initialState) {
    var _a = react_1["default"].useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var isMounted = useIsMounted();
    function safeDispatch() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isMounted.current) {
            dispatch(args);
        }
    }
    return [state, safeDispatch];
};
exports.useSafeReducer = useSafeReducer;
function useIsMounted() {
    var isMounted = react_1["default"].useRef(false);
    (0, exports.useSafeEffect)(function () {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}
exports.useIsMounted = useIsMounted;
;
