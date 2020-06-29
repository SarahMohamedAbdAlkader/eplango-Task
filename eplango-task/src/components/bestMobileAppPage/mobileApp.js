import React from 'react';

import bestapp from '../../assests/imgs/bestapp.jpg'
import bestappimage from '../../assests/imgs/bestappimage.png'
import titleline1 from '../../assests/imgs/titleline1.png'
import './mobile.css'
import '../../App.css'
import apple from '../../assests/imgs/apple.png'
import google from '../../assests/imgs/google.png'
function Mobile() {
  return (

    <div class="image" >

      <img src={bestapp} alt="Responsive image" />
      <span >
        <div class="row mt-5 ">

          <div class="col-md-7 text-center   ">
            <div class="mb-5">
              <img src={titleline1} class="centerLine " alt="Responsive image" /></div> <br />
            <h2 class=" mt-5">BEST MOBILE APP <br /> <p class="p mt-2">hjhkdjl kskms  hfh here we are jjj  sjdjjd olsklsk iwwiwo mskkssk klskksls iii  </p> </h2> <br />
            <p class="p  mt-2">hjhkdjl kskms  hfh here we are jjj  sjdjjd olsklsk iwwiwo mskkkkkd ddjjd ssk klskksls iii <br /> dlkdlkdlkdk dkldkmdkd sksmlksmsmsskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk slks klkslk  <br /> ya sed y kjjfj djdkj oslklkw wkwkwnlkd llwkw  her sk ia ma plen g gkfl jekekeom </p>
            <div class="row mt-5 ml-3 col-md-12 ">
              <button type="button" class="btn btn-outline-light  col-md-5  p-3  "><img src={apple} width="25px" height="25px" />Apple Store</button>
              <button type="button" class="btn btn-outline-light  col-md-5  p-3"><img src={google} width="25px" height="25px" />Google Play</button>

            </div>
          </div>
          <div class="col-md-3 ">
            <img alt="bestappimage image" src={bestappimage} class="  ml-0 mr-3" />

          </div>


        </div>
      </span>
    </div>
  );
}

export default Mobile;
