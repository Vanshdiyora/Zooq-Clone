const productReducer = (state, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          
          products: [...state.products, ...action.payload],
            
        };
      case 'SET_OUR_PRODUCTS':
        return {
          ...state,
          ourProduct: action.payload,
        };
      default:
        return state;
    }
  };
    
  export default productReducer;
  