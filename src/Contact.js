import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
function Contact() {
  return (
    <div><Navbar/>
       <div class="contains">
		<div class="innerwrap">
		
			
		
			<section class="sections2 clearfix1">
				<div class="col2 column1 first">
        <div class="sec2innercont">
						<div class="sec2addr">
                        <p><span class="collig">Address :</span> <b>Poonam Oil Industries</b><br/>Near shri shakun hyundai  Ranjeet Nagar,<br/> Bharatpur, Rajasthan 321001</p>
					<p><span class="collig">Phone :</span> +91 7792016060 , 9024022545</p>
							<p><span class="collig">Email :</span> poonamoil2106@gmail.com</p>
						</div>
					</div>  
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.5752722012953!2d77.48499337522458!3d27.232481646276064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a37989983ce9%3A0xd27bbe1fd92fba0c!2sPoonam%20Oil%20Industries!5e0!3m2!1sen!2sin!4v1691079292101!5m2!1sen!2sin" 
          title="Poonam Oil Industries Location"
          className='location'
           style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div class="col2 column2 last">
					
					<div class="sec2contactform">
          
						<h3 class="sec2frmtitle">We look forward to hearing from you and being a part of your journey towards a healthier and tastier lifestyle with our healthcare mustard oil. Your satisfaction is our priority, and we are here to assist you every step of the way.

</h3>
						<form action="">
							<div class="clearfix1">
								<input class="col2 first" type="text" placeholder="FirstName"/>
								<input class="col2 last" type="text" placeholder="LastName"/>
							</div>
							<div class="clearfix1">
								<input  class="col2 first" type="Email" placeholder="Email"/>
								<input class="col2 last" type="text" placeholder="Contact Number"/>
							</div>
							<div class="clearfix1">
								<textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
							</div>
							<div class="clearfix1"><input type="submit" value="Send"/></div>
						</form>
					</div>

				</div>
			</section>
		
		</div>
	</div>

<Footer/> 
    </div>
  )
}

export default Contact