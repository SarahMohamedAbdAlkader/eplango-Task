import React from 'react';
import titleline2 from '../../assests/imgs/titleline2.png'
import teambg from '../../assests/imgs/teambg.jpg'
import team1image from '../../assests/imgs/team1image.jpg'
import team2image from '../../assests/imgs/team2image.jpg'
import team3image from '../../assests/imgs/team3image.jpg'
import SupportClients from '../supportClients/SuppotClients'
import '../../App.css';
import './Teams.css'

function Team() {

  return (

    <div class="image mb-5 ">
      <img class=" mx-auto d-block mb-3" src={titleline2} />
      <h4 class="h2 text-center font-weight-bold "> OUR TEAM</h4>
      <p class="p mb-5 text-center mx-auto d-block mb-5"> This paragraph
      contains a lot of lines
      in the source code,
      but the browser
ignores it.</p>

      <div class="image " >
        <img src={teambg} alt="Responsive image" />
        <span >


          <p class="p mb-5 text-center mx-auto d-block mt-5"> This paragraph
          contains a lot of lines
          in the source code,
          but the browser
ignores it. <br /> This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.<br />This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.</p>

        </span>
      </div>

      <div class="row ml-4 card-group cards justify-content-center mb-5  ">
        <div class="card col-6  ml-5" >
          <img src={team1image} alt="team1image" />

        </div>
        <div class="card col-6 ">
          <img src={team2image} alt="team2image" />

        </div>
        <div class="card col-6 ">
          <img src={team3image} alt="team3image" />

        </div>
        <div class="mt-5">

        </div>
      </div>




    </div>
  );
}

export default Team;
