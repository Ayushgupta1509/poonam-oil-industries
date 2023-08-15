import React from 'react'
import Navbar from "./Navbar"
import Video from './image/video.mp4'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
function Home() {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div><Navbar/>
   <div className="background-video">
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contents">
        <h1>Your Centered Text</h1>
        <button>Click Me</button>
      </div>
    </div>

    <h1 style={{textAlign:"center",fontWeight:"bold",fontSize:"2rem",paddingTop:"2rem"}}>Our Product</h1>
    <div className="wrapper">
      <Slider className="my-slider" {...settings}>
      {/* <div className="slide">
          <img src="https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
          <div className="overlay">
            <h2>Slide 1 Title</h2>
            <p>Slide 1 Description</p>
          </div>
          </div>
          <div className="slide">
          <img src="https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
          <div className="overlay">
            <h2>Slide 1 Title</h2>
            <p>Slide 1 Description</p>
          </div>
          </div>
          <div className="slide">
          <img src="https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
          <div className="overlay">
            <h2>Slide 1 Title</h2>
            <p>Slide 1 Description</p>
          </div>
          </div>
          <div className="slide">
          <img src="https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
          <div className="overlay">
            <h2>Slide 1 Title</h2>
            <p>Slide 1 Description</p>
          </div>
          </div>
          <div className="slide">
          <img src="https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
          <div className="overlay">
            <h2>Slide 1 Title</h2>
            <p>Slide 1 Description</p>
          </div>
          </div>
          <div className="slide">
          <img src="https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
          <div className="overlay">
            <h2>Slide 1 Title</h2>
            <p>Slide 1 Description</p>
          </div>
          </div> */}
        <div><img src='https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
        <div><img src='https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
        <div><img src='https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
        <div><img src='https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
        <div><img src='https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
        <div><img src='https://images.pexels.com/photos/6396960/pexels-photo-6396960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>

      </Slider>
    </div>
    <Footer/>
    </div>
  )
}

export default Home



  

