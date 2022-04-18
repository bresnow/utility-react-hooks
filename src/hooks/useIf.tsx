import { useSafeCallback, useSafeEffect } from "./useSafe";

const noop = () => { };

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
export function useIf<ReturnValue = any>(
    conditions: any[],
    statementCallback: () => ReturnValue,
    opts?: { else: () => void }
) {
    // Csallback function that returns the condition statement
    let memo = useSafeCallback(statementCallback);

    // iff mounted we'll loop through the condition dependencies to check for falsy values
    useSafeEffect(() => {
        for (let i = 0; i < conditions.length; i++) {
            if (
                conditions[i] === false ||
                conditions[i] === null ||
                typeof conditions[i] === "undefined"
            ) {
                return opts?.else ? opts.else : noop(); // cleanup function as an else statement
            }
        }
        // if condition is true make a statement
        memo();
    }, [conditions]);
}

// Rule the world 