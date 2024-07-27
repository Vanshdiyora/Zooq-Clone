
function cartReducer(state, action) {
    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;
        let productExist = state.cart.find(
            (cur) => cur.id == id
        )

        if (productExist) {
            let updated = state.cart.map((cur) => {
                if (cur.id == id) {
                    let newAmount = cur.amount + amount
                    return {
                        ...cur,
                        amount: newAmount
                    }

                }
                else return cur;
            })
            return {
                ...state,
                cart: updated
            }
        }
        else {
            let cartProduct;
            cartProduct = {
                id,
                name: product.title,
                amount,
                image: product.image,
                price: product.price,
                shipping:product.shipping

            }

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        }

    }

    if (action.type === "REMOVE_ITEM") {

        let updatedCart = state.cart.filter((cur) => cur.id !== action.payload);
        return {
            ...state,
            cart: updatedCart,
        }
    }

    // if(action.type==="CLEAR_CART"){
    //     return {
    //         ...state,
    //         cart: []
    //     }
    // }

    if (action.type === "INCREASE") {
        let updated = state.cart.map((cur) => {
            if (cur.id == action.payload) {
                let newAmount = cur.amount + 1
                return {
                    ...cur,
                    amount: newAmount
                }

            }
            else return cur
        })
        return {
            ...state,
            cart: updated,
        }
    }

    if (action.type === "DECREASE") {
        let updated = state.cart.map((cur) => {
            if (cur.id == action.payload) {
                let newAmount;
                if(cur.amount>1){newAmount = cur.amount - 1}
                else newAmount=cur.amount
                 
                return {
                    ...cur,
                    amount: newAmount
                }

            }
            else return cur
        })
        return {
            ...state,
            cart: updated,
        }
    }

    if(action.type==="CART_TOTAL_ITEM_PRODUCT_PRICE"){
        let updProd=state.cart.length
        let update=state.cart.reduce((initial,cur)=>{
            let {amount,price}=cur

            initial.total_item=initial.total_item+amount
            initial.total_price=initial.total_price+(amount*price)

            return initial
        },{
            total_item:0,
            total_price:0
        })

        return{
            ...state,
            total_product:updProd,
            total_item:update.total_item,
            total_price:update.total_price
        }
    }

    if(action.type==="IN_CART"){
        let present=state.cart.map((cur)=>{
            if (cur.id==action.payload){
                cur.inCart=true
                return cur
            }
            else return cur
        })
        console.log(present)
        // state.cart.some(item=>item.id===action.payload)
        return {
            ...state,
            cart:present
        }
    }

    return state;
}

export default cartReducer