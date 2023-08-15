import React from 'react'
import Navbar from "./Navbar"
import bottel1 from './image/bottle1.jpg'
import jar5 from './image/jar5.jpg'
import tin15 from './image/tin15.jpeg'
import Footer from './Footer'
function Product() {
  return (
    <div><Navbar/>
    <h1 style={{textAlign:"center",fontWeight:"bold",fontSize:"2rem",paddingTop:"1rem"}}>Mustard Oils</h1>
   
    <div class="containers">
        {/* <div class="card" style="--clr: #009688"> */}
        <div class="card" >
            <div class="img-box">
                <img src={bottel1} alt='1 ltr Mustrad oil logo'/>
            </div>
            <div class="content">
                <h2>1 ltr Bottle</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="" style={{color:"black"}}>Read More</a>
            </div>
        </div>
        {/* <div class="card" style="--clr: #FF3E7F"> */}
        <div class="card" >
            <div class="img-box">
                <img src={jar5} alt='5 ltr Mustrad oil logo'/>
            </div>
            <div class="content">
                <h2>5 ltr Jar</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="" style={{color:"black"}}>Read More</a>
            </div>
        </div>
        {/* <div class="card" style="--clr: #03A9F4"> */}
        <div class="card" >
            <div class="img-box">
                <img src={tin15} alt='15 ltr Mustrad oil logo'/>
            </div>
            <div class="content">
                <h2>15 Kg Tin</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="" style={{color:"black"}}>Read More</a>
            </div>
        </div>
    </div>
    <h1 style={{textAlign:"center",fontWeight:"bold",fontSize:"2rem",paddingTop:"1rem"}}>Mustard Cake</h1> 
    <div class="containers">
    <div class="card" >
            <div class="img-box">
                <img src={bottel1} alt='1 ltr Mustrad oil logo'/>
            </div>
            <div class="content">
                <h2>50 kg</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="" style={{color:"black"}}>Read More</a>
            </div>
        </div>
        <div class="card" >
            <div class="img-box">
                <img src={bottel1} alt='1 ltr Mustrad oil logo'/>
            </div>
            <div class="content">
                <h2>60 kg</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="" style={{color:"black"}}>Read More</a>
            </div>
        </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Product