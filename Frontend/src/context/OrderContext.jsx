import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/OrderReducer'
const OrderContext=createContext()

const OrderProvider=({children})=>{

    const initialState={
        myOrders:[]
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    const addOrder =(myOrders)=>{
        dispatch({type:"ADD_ORDER",payload:myOrders})
    }


    return <OrderContext.Provider value={{...state,
                                        addOrder
                                        }}>
        {children}
    </OrderContext.Provider>
}

const useOrderContext=()=>useContext(OrderContext)

export {OrderProvider,useOrderContext}