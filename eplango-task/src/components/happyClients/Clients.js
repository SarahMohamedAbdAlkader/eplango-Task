import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientsbg from '../../assests/imgs/clientsbg.jpg'
import testimonial1image from '../../assests/imgs/testimonial1image.png'
import testimonial2image from '../../assests/imgs/testimonial2image.png'
import testimonial3image from '../../assests/imgs/testimonial3image.png'
import titleline1 from '../../assests/imgs/titleline1.png'
import '../../App.css'
export default class Clients extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      centerMode: true,
      
      
    };
    return (
      <div class="image ">
        
     
 <img src={clientsbg} class="image responsive"  alt="Responsive image"/>    
<span > <img class=" mx-auto d-block mb-3"src={titleline1}/>
    <h3 class="h2 text-center"> HAPPY CLIENTS</h3>
    <p class="p text-center">here we gp for paragraph and some words jjj etc etc etc etc ya basha </p>
    
<Slider {...settings}>
    <img class="imageClient d-block "src={testimonial1image} />
    <img class="imageClient d-block "src={testimonial2image} />
    <img class="imageClient d-block "src={testimonial3image} />
</Slider>

</span>
      </div>
    );
  }
}
