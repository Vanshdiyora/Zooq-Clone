import {  createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext =createContext();

const CartProvider=({children})=>{
    const getData=()=>{
        let newCart=localStorage.getItem("cart")
        if(newCart.length==0)
            return 0;
        else return JSON.parse(newCart);
    }
    const initialState={
        cart:getData(),
        total_item:'',
        total_product:'',
        total_price:'',
        shipping:70,
    }
    
    const [state,dispatch]=useReducer(reducer,initialState)

    
    const addtocart=(id,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,amount,product}});
    }

    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const decrease=(id)=>{
        dispatch({type:"DECREASE",payload:id})
    }
    const increase=(id)=>{
        dispatch({type:"INCREASE",payload:id})
    }
    // const  clearCart=()=>{
    //     dispatch({type:"CLEAR_CART"})
    // }
    const isInCart = (id) => {
        return state.cart.some(item => item.id === id);
      };

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM_PRODUCT_PRICE"})

        localStorage.setItem("cart",JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.Provider value={{... state, 
                                        addtocart,
                                        removeItem,
                                        increase,
                                        decrease,
                                        isInCart,
                                        // clearCart
                                        }}>
        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext}