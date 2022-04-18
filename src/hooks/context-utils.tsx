import React from "react";
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

export function useContextReducer<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState;
  const stateCtx = React.createContext(initialState);
  const dispatchCtx = React.createContext(defaultDispatch);
  function useStateCtx<K extends keyof StateType>(property: K) {
    const state = React.useContext(stateCtx);

    if (state === undefined) {
      throw new Error("useStateCtx must be used within a Context.Provider");
    }
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    const context = React.useContext(dispatchCtx);
    if (context === undefined) {
      throw new Error("useDispatchCtx must be used within a Context.Provider");
    }
    return context;
  }

  function Provider({ children }: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<
      React.Reducer<StateType, ActionType>
    >(reducer, initialState);
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  }

  return [useStateCtx, useDispatchCtx, Provider] as const;
}

/**
 *
 * Create context and provider with no initial values
 * @returns [useCtx, Provider]
 */

export function createSafeCtx<A>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const created = React.useContext(ctx);
    if (!created)
      throw new Error("useCtx must be inside a Provider with a value");
    return created;
  }
  return [useCtx, ctx.Provider] as const; // make TypeScript infer a tuple, not an array of union types
}
