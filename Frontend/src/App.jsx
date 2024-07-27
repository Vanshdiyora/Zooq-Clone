import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header, Home, Product, Cart, Login, Support } from "./Index"
import Layout from "./Layout"
import ProductDetail from "./pages/Product page/ProductDetail"
import Sign from "./pages/Sign/Sign"
import Order from "./pages/MyOrder/Order"
import { RouterProvider } from "./context/RouterContext"


function App() {

  return (
    <>
    <RouterProvider>

      <BrowserRouter>
  
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />

          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productview/:id" element={<ProductDetail />} />
            <Route path="/order" element={<Order />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </RouterProvider>
    </>
  )
}

export default App
