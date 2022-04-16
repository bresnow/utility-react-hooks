"use strict";
exports.__esModule = true;
var useSafe_1 = require("./useSafe");
var useConsole_1 = require("./useConsole");
var useIf_1 = require("./useIf");
var useLZ_1 = require("./useLZ");
var context_utils_1 = require("./context-utils");
var misc_1 = require("./misc");
function UtilityHooks() {
    return {
        useLZObject: useLZ_1.useLZObject,
        useSafeEffect: useSafe_1.useSafeEffect,
        useSafeCallback: useSafe_1.useSafeCallback,
        useIsMounted: useSafe_1.useIsMounted,
        useConsole: useConsole_1.useConsole,
        useIf: useIf_1.useIf,
        useTimeout: misc_1.useTimeout,
        useDebounce: misc_1.useDebounce,
        createSafeCtx: context_utils_1.createSafeCtx,
        useContextReducer: context_utils_1.useContextReducer
    };
}
exports["default"] = UtilityHooks;
