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
exports.__esModule = true;
exports.useConsole = void 0;
var useSafe_1 = require("./useSafe");
/**
 * Hook to use console.log only if NODE_ENV === 'development'
 * Naming the function to something shorter like "_" is a good idea for speed and when removing from the code...
 * {assert, info, log, warn and error} have a trace() method to print the location in code
 * @example
 * ``````
 * import { useConsole } from "useConsole";
 * const _ = useConsole();
 * _.log("Hello World").trace();
 */
function useConsole() {
    var info = (0, useSafe_1.useSafeCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (process.env.NODE_ENV !== 'production')
            console.info.apply(console, args);
        return { trace: trace };
    });
    var assert = (0, useSafe_1.useSafeCallback)(function (condition) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (process.env.NODE_ENV !== 'production')
            console.assert.apply(console, __spreadArray([condition && condition], args, false));
        return { trace: trace };
    });
    var clear = (0, useSafe_1.useSafeCallback)(function () {
        if (process.env.NODE_ENV !== 'production')
            console.clear();
    });
    var log = (0, useSafe_1.useSafeCallback)(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (process.env.NODE_ENV !== 'production')
            console.log.apply(console, args);
        return { trace: trace };
    });
    var count = (0, useSafe_1.useSafeCallback)(function (label) {
        if (process.env.NODE_ENV !== 'production')
            console.count(label);
    });
    var countReset = (0, useSafe_1.useSafeCallback)(function (label) {
        if (process.env.NODE_ENV !== 'production')
            console.countReset(label);
    });
    var debug = (0, useSafe_1.useSafeCallback)(function (message) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (process.env.NODE_ENV !== 'production')
            console.debug.apply(console, __spreadArray([message], data, false));
        return { trace: trace };
    });
    var dir = (0, useSafe_1.useSafeCallback)(function (item) {
        if (process.env.NODE_ENV !== 'production')
            console.dir(item);
    });
    var error = (0, useSafe_1.useSafeCallback)(function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (process.env.NODE_ENV !== 'production') {
            console.error.apply(console, data);
            return { trace: trace };
        }
    });
    var group = (0, useSafe_1.useSafeCallback)(function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        return function (_a) {
            if (process.env.NODE_ENV !== 'production')
                console.groupCollapsed.apply(console, data);
            groupEnd();
        };
    });
    var groupEnd = (0, useSafe_1.useSafeCallback)(function () {
        if (process.env.NODE_ENV !== 'production')
            console.groupEnd();
    });
    var table = (0, useSafe_1.useSafeCallback)(function (tabularData, properties) {
        if (process.env.NODE_ENV !== 'production')
            console.table(tabularData, properties);
    });
    var time = (0, useSafe_1.useSafeCallback)(function (label) {
        if (process.env.NODE_ENV !== 'production')
            console.time(label);
    });
    var timeEnd = (0, useSafe_1.useSafeCallback)(function (label) {
        if (process.env.NODE_ENV !== 'production')
            console.timeEnd(label);
    });
    var timeLog = (0, useSafe_1.useSafeCallback)(function (label) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (process.env.NODE_ENV !== 'production')
            console.timeLog.apply(console, __spreadArray([label], data, false));
    });
    var timeStamp = (0, useSafe_1.useSafeCallback)(function (label) {
        if (process.env.NODE_ENV !== 'production')
            console.timeStamp(label);
    });
    var trace = (0, useSafe_1.useSafeCallback)(function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (process.env.NODE_ENV !== 'production')
            console.trace.apply(console, data);
    });
    var warn = (0, useSafe_1.useSafeCallback)(function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (process.env.NODE_ENV !== 'production')
            console.warn.apply(console, data);
        return { trace: trace };
    });
    return {
        assert: assert,
        clear: clear,
        log: log,
        info: info,
        count: count,
        countReset: countReset,
        debug: debug,
        dir: dir,
        error: error,
        group: group,
        groupEnd: groupEnd,
        table: table,
        time: time,
        timeEnd: timeEnd,
        timeLog: timeLog,
        timeStamp: timeStamp,
        trace: trace,
        warn: warn
    };
}
exports.useConsole = useConsole;
