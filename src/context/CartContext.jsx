import React, { createContext, useCallback, useMemo, useReducer } from 'react'

export const CartContext = createContext(null);

const initialState = {
    items: [],
    cartItems: []
}

const CartContextProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Init':
                return {
                    ...state,
                    items: action.payload
                }
            case "Add":
                const item = state.cartItems.find(item => item.id === action.payload.id);

                if (item) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(i => {
                            if (i.id !== action.payload.id) return i;
                            return {
                                ...i,
                                qty: i.qty + 1
                            }
                        })
                    }
                }
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        { ...action.payload, qty: 1 }
                    ]
                }

            case 'Increment':
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => {
                        if (i.id !== action.payload.id) return i;
                        return {
                            ...i,
                            qty: i.qty + 1
                        };
                    })
                }
            case 'Decrement':
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => {
                        if (i.id !== action.payload.id) return i;
                        return {
                            ...i,
                            qty: i.qty > 1 ? i.qty - 1 : 0
                        }
                    })
                };
            case 'Delete':
                return {
                    ...state,
                    cartItems: state.cartItems.filter(i => i.id !== action.payload.id)
                };
            default: {
                return state
            }
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddToCart = useCallback((item) => {
        dispatch({
            type: 'Add',
            payload: {
                ...item,
            }
        });
    }, []);


    const handleInitData = useCallback((items) => {
        dispatch({
            type: 'Init',
            payload: items
        })
    }, []);

    const handleIncrement = useCallback((pizza) => {
        dispatch({
            type: 'Increment',
            payload: pizza
        });
    }, [state.cartItems]);

    const handleDecrement = useCallback((pizza) => {
        dispatch({
            type: 'Decrement',
            payload: pizza
        });
    }, [state.cartItems]);

    const handleDelete = useCallback((id) => {
        dispatch({
            type: 'Delete',
            payload: { id }
        });
    }, []);

    const value = useMemo(() => ({
        onInit: handleInitData,
        onAddToCart: handleAddToCart,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onDelete: handleDelete,
        state: state,
    }), [handleInitData, handleAddToCart, handleIncrement, handleDecrement, state]);


    return (
        <CartContext.Provider value={value}> {children}</CartContext.Provider>
    )
}

export default CartContextProvider