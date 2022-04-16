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
export declare function useIf<ReturnValue = any>(conditions: any[], statementCallback: () => ReturnValue, opts?: {
    else: () => void;
}): void;
