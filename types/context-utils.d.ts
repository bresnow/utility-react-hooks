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
export declare function useContextReducer<StateType, ActionType>(reducer: React.Reducer<StateType, ActionType>, initialState: StateType): readonly [<K extends keyof StateType>(property: K) => StateType[K], () => React.Dispatch<ActionType>, ({ children }: React.PropsWithChildren<{}>) => JSX.Element];
/**
 *
 * Create context and provider with no initial values
 * @returns [useCtx, Provider]
 */
export declare function createSafeCtx<A>(): readonly [() => A, React.Provider<A>];
