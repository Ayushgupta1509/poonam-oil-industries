import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Product from "./Product"
import Blogs from "./Blogs"
import About from "./About"
import Contact from "./Contact"
function App (){
  return(
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App



