"use strict";
exports.__esModule = true;
exports.useIf = void 0;
var useSafe_1 = require("./useSafe");
var noop = function () { };
/**
 * @abstract -  If statement hook that returns statement if condition is true
 * @param statementCallback - takes no params and returns a statement
 * @param conditions - array of conditions to check if statement should be returned
 *
 * @example -
 * ``````````````````````````````
 * useIf( [auth?.keys ],
 * () => {
  nodepathSet(`~${auth.keys?.pub}.${path}`);
  });

  log(nodepath, "nodepath");   //  ['~YQus5nDLVi5PG5BJXGTLoizIWbnrNN9NRER3-0RbqV0.eaV67IswAG3zCf5C5qqR7mF7EwgfmqIsjgf1MDhSNPA.pages.index', 'nodepath']
 * ``````````````````````````````
 */
function useIf(conditions, statementCallback, opts) {
    // Csallback function that returns the condition statement
    var memo = (0, useSafe_1.useSafeCallback)(statementCallback);
    // iff mounted we'll loop through the condition dependencies to check for falsy values
    (0, useSafe_1.useSafeEffect)(function () {
        for (var i = 0; i < conditions.length; i++) {
            if (conditions[i] === false ||
                conditions[i] === null ||
                typeof conditions[i] === "undefined") {
                return (opts === null || opts === void 0 ? void 0 : opts["else"]) ? opts["else"] : noop(); // cleanup function as an else statement
            }
        }
        // if condition is true make a statement
        memo();
    }, [conditions]);
}
exports.useIf = useIf;
// Rule the world 
