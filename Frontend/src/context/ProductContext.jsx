import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import reducer from '../reducer/productReducer';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const ref =useRef(null);
  // {
  //   id:1,
  //   title:'Zooq Card : Digital Card',
  //   image:'https://zooq-digital.sgp1.digitaloceanspaces.com/images/Card.webp',
  //   price:500,
  //   description:'Business card'
  // }
  const initialState = {
    products: [],
    ourProduct: [{
      id:1,
      title:'Zooq Card : Digital Card',
      image:'https://zooq-digital.sgp1.digitaloceanspaces.com/images/Card.webp',
      price:500,
      description:'Business card'
    }],
    ref:ref,
    loading:true
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getCardData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      const data = await res.json();

      console.log(data)
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      let tr=true;
      if (tr){
        dispatch({ type: 'SET_OUR_PRODUCTS', payload: data });
        tr=false
       }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCardData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getCardData();
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
      
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductProvider, useProductContext };
