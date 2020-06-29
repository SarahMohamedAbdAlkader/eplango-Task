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
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      focusOnSelect: true
    };
    return (
      <div class="image ">


        <img src={clientsbg} class="" alt="Responsive image" />
        <span > <img class=" mx-auto d-block mb-3" src={titleline1} />
          <h3 class="h2 text-center"> HAPPY CLIENTS</h3>
          <p class="p text-center">here we gp for paragraph and some words jjj etc etc etc etc ya fndm </p>

          <Slider {...settings}>
          <div key={1}>
            <img class="imageClient d-block " src={testimonial1image} />
            </div>
            <div key={2} class="text-center">
            <img class="imageClient d-block " src={testimonial2image} />
            <h7 class="mt-5">mohamed lubis- web Designer</h7>
            <p class="p mt-3" >Helllo I a m Sarah djklkfj here we gp for paragraph and some words jjj etc etc etc  klam klam klam bla bla bla  bla bla bla bjjjjjjjjjjjjjj etc ya fndm Hello there from kza</p>
            </div>
            <div key={3}>
            <img class="imageClient d-block " src={testimonial3image} />
            </div>
            
            <div key={4}>
            <img class="imageClient d-block " src={testimonial1image} />
            </div>
            <div key={5}>
            <img class="imageClient d-block " src={testimonial2image} />
            </div>
          </Slider>

        </span>
      </div>
    );
  }
}
