import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { OrderProvider } from './context/OrderContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductProvider>
        <OrderProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </OrderProvider>
    </ProductProvider>
)
