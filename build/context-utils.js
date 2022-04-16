"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createSafeCtx = exports.useContextReducer = void 0;
var react_1 = __importDefault(require("react"));
/**
 *  Create contexts and providers as if using "useReducer"
 * @param reducer The function that returns the props you want to drill
 * @param initialState The initial props
 * @returns
 *
 * @example
 * ----
 const initialState = {
  hidden: true,
  cartItems: [],
  address: null,
};

  function cartReducer(state: State, action: Action): State {
  console.log(state, 'context state');

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default: {
       throw new Error(`Unhandled action type: ${action.type}`);
     }
  }
  ----
  const [useCartState, useCartDispatch, CartProvider] = createCtxWithReducer(
  cartReducer,
  initialState
);

 */
function useContextReducer(reducer, initialState) {
    var defaultDispatch = function () { return initialState; };
    var stateCtx = react_1["default"].createContext(initialState);
    var dispatchCtx = react_1["default"].createContext(defaultDispatch);
    function useStateCtx(property) {
        var state = react_1["default"].useContext(stateCtx);
        if (state === undefined) {
            throw new Error("useStateCtx must be used within a Context.Provider");
        }
        return state[property]; // only one depth selector for comparison
    }
    function useDispatchCtx() {
        var context = react_1["default"].useContext(dispatchCtx);
        if (context === undefined) {
            throw new Error("useDispatchCtx must be used within a Context.Provider");
        }
        return context;
    }
    function Provider(_a) {
        var children = _a.children;
        var _b = react_1["default"].useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
        return (react_1["default"].createElement(dispatchCtx.Provider, { value: dispatch },
            react_1["default"].createElement(stateCtx.Provider, { value: state }, children)));
    }
    return [useStateCtx, useDispatchCtx, Provider];
}
exports.useContextReducer = useContextReducer;
/**
 *
 * Create context and provider with no initial values
 * @returns [useCtx, Provider]
 */
function createSafeCtx() {
    var ctx = react_1["default"].createContext(undefined);
    function useCtx() {
        var created = react_1["default"].useContext(ctx);
        if (!created)
            throw new Error("useCtx must be inside a Provider with a value");
        return created;
    }
    return [useCtx, ctx.Provider]; // make TypeScript infer a tuple, not an array of union types
}
exports.createSafeCtx = createSafeCtx;
