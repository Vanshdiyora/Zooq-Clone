
function OrderReducer(state,action) {

    if(action.type==="ADD_ORDER"){
        return {
            ...state,
            myOrders:[...state.myOrders,action.payload]
        }
    }

  return state;
}

export default OrderReducer