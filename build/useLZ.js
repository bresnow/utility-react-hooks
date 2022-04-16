"use strict";
exports.__esModule = true;
exports.useLZObject = void 0;
var useSafe_1 = require("./useSafe");
var lz_object_1 = require("lz-object");
var useLZObject = function (_a) {
    var output = _a.output;
    var compress = (0, useSafe_1.useSafeCallback)(function (value) {
        return lz_object_1.lzObject.compress(value, { output: output });
    });
    var decompress = (0, useSafe_1.useSafeCallback)(function (value) {
        return lz_object_1.lzObject.decompress(value, { output: output });
    });
    return [compress, decompress];
};
exports.useLZObject = useLZObject;
