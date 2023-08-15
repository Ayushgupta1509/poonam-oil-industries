import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Footer() {
   
  return (
    <div> 
         <footer>
    <div class="footer-container container">
        <div class="content_1">
            <h4 style={{color:"#fff"}}>REACH US:</h4>
            <div class="content_2">
            <a  style={{color:"#fff"}} > <LocalPhoneIcon style={{color:"white",fontSize:"1rem"}}/> +91 7792016060 , 9024022545</a>
            <a  style={{color:"#fff"}} href="mailto:marketing@sstpl.net.in"><b>Enquires :</b> poonamoil2106@gmail.com
                </a>
            {/* <a  style={{color:"#fff"}} href="mailto:sales@sstpl.net.in">sales@sstpl.net.in</a> */}
            <a  style={{color:"#fff"}} href="mailto:support@sstpl.net.in"><b>Support : </b> 7568696231</a>
        </div>
           
        </div>
       
        <div class="content_3">
            <h4>SHOPPING</h4>
            <a style={{color:"#fff"}} href="./contact.html">Contact Us</a>
            <a style={{color:"#fff"}} href="https://payment-method-sb.netlify.app/" target="_blank">About us</a>
            <a style={{color:"#fff"}} href="https://delivery-status-sb.netlify.app/" target="_blank">Blog</a>
        </div>
        <div class="content_4">
            <h4>Address:</h4>
            <p>Poonam Oil Industries,<br/>Near By shri shakun hyundai<br/> House,Bhagwan Marg, Swage Farm,<br/> Ranjeet Nagar, Bharatpur, Rajasthan 321001</p>
        </div>
    </div>
    <div style={{textAlign:"center"}}>
<a href="https://www.instagram.com/lorawan_sstpl/" blank="" class="icon-button instagram"><i class="fab fa-instagram"></i><span></span></a>
<a href="https://www.facebook.com/SSTPL.in" class="icon-button facebook"><i class="fab fa-facebook"></i><span></span></a>
<a href="https://www.linkedin.com/company/sstpl/" class="icon-button linkedin"><i class="fab fa-linkedin"></i><span></span></a>
        {/* <a href="#" class="icon-button twitter"><i class="fab fa-twitter"></i><span></span></a> */}
</div>
    <div class="f-design">
        <div class="f-design-txt container">
            <p style={{margin:"auto"}}>© 2022-2023 All Copyright: Poonam Oil Industries</p>
        </div>
        </div>
 
</footer>
</div>
  )
}

export default Footer