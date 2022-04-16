"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useIsMounted = exports.useSafeCallback = exports.useSafeEffect = exports.useLZObject = exports.useIf = exports.useConsole = exports.useContextReducer = exports.createSafeCtx = void 0;
var context_utils_1 = require("./context-utils");
__createBinding(exports, context_utils_1, "createSafeCtx");
__createBinding(exports, context_utils_1, "useContextReducer");
var useConsole_1 = require("./useConsole");
__createBinding(exports, useConsole_1, "useConsole");
var useIf_1 = require("./useIf");
__createBinding(exports, useIf_1, "useIf");
var useLZ_1 = require("./useLZ");
__createBinding(exports, useLZ_1, "useLZObject");
var useSafe_1 = require("./useSafe");
__createBinding(exports, useSafe_1, "useSafeEffect");
__createBinding(exports, useSafe_1, "useSafeCallback");
__createBinding(exports, useSafe_1, "useIsMounted");
var utilityHooks_1 = __importDefault(require("./utilityHooks"));
exports["default"] = utilityHooks_1["default"];
