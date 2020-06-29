import React, { useEffect, useState } from 'react';
import home from '../../assests/imgs/home.jpg'
import logo from '../../assests/imgs/logo.png'
import hero from '../../assests/imgs/hero.png'
import apple from '../../assests/imgs/apple.png'
import google from '../../assests/imgs/google.png'
import { Icon } from 'react-icons-kit'
import titleline1 from '../../assests/imgs/titleline1.png'
import titleline2 from '../../assests/imgs/titleline2.png'
import {radioChecked} from 'react-icons-kit/icomoon/radioChecked'
import './Welcome.css';
import '../../App.css'


function WelcomePage() {
  // const size = useWindowSize();

  // function useWindowSize() {

  //     function getSize() {

  //         return {

  //             width: window.innerWidth,

  //             height: window.innerHeight

  //         };

  //     }



  //     const [windowSize, setWindowSize] = useState(getSize);



  //     useEffect(() => {


  //         function handleResize() {

  //             setWindowSize(getSize());

  //         }



  //         window.addEventListener('resize', handleResize);

  //         return () => window.removeEventListener('resize', handleResize);

  //     }, []);



  //     return windowSize;
  // }
  return (

    <div  >
      <img src={home}  alt="Responsive image" />
    
        
        <div class="container d-flex justify-content-around ">
          <span><nav class="navbar navbar-expand-lg navbar-light text-white  mr-5 ml-5 font-weight-bold">
            <a class="navbar-brand ml-5 animated bounce infinite" href="#"><img class="navbar-brand animated bounce infinite" src={logo} /></a>
            <button class="navbar-toggler navbar-toggler-icon" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav"  >
              <ul class="navbar-nav ">
                <li class="nav-item active">
                  <a class="nav-link text-white" href="/" style={{ textDecoration: "line-through"}}>HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white " href="#">FEATURES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">REVIEWS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">OUTTEAM</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">SUPPORT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">BUYTHEME</a>
                </li>
              </ul>

            </div>
          </nav>
         <div class="row ">

<div class="col-md-6 container">
<img alt="robot image" src={hero} class="   ml-0 mr-3" />

</div>
<div class="col-md-6">
<h1 class="h1" >AWESOME<br /> MOBILE APP. </h1><br /><p>An awesome WordPress theme for App Landing and App Store site</p>
                <div class="row mt-5  ">
                  <button type="button" class="btn btn-outline-light  col-md-5  p-3  "><img src={apple} width="25px" height="25px" />Apple Store</button>
                  <button type="button" class="btn btn-outline-light  col-md-5  p-3"><img src={google} width="25px" height="25px" />Google Play</button>

                </div>

</div>
</div>

          </span>

        </div>

    

      <br />
    </div>



  )

}

export default WelcomePage;