import React from 'react';
import titleline2 from '../../assests/imgs/titleline2.png'
import teambg from '../../assests/imgs/teambg.jpg'
import team1image from '../../assests/imgs/team1image.jpg'
import team2image from '../../assests/imgs/team2image.jpg'
import team3image from '../../assests/imgs/team3image.jpg'
import '../../App.css';
import './Teams.css'

function Team() {
  
  return (
 <div class="image " >
   <img class=" mx-auto d-block mr-5"src={titleline2}/>
    <h4 class="h2 text-center font-weight-bold"> OUR TEAM</h4>
    <p class="p text-center mb-5">da  klam 3n el teaaaaaaaaaaaaaaaaaaaaaaaaaaam</p>
    <div class="image ">
    <img class="image mt-5"src={teambg}alt="back ground"/>
    <span>
    <div  class="text-center">
   <p class="p mb-5 "> da klaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam <br/> klam tany  etc etc etc ay 7agaga</p>
</div>
   </span>
   </div>
        <div class="row ml-4 card-group cards justify-content-center  ">
        <div class="card col-6 col-sm-3 ml-5" >
            <img src={team1image} alt= "team1image"/>

        </div>
        <div class="card col-6 col-sm-3">
            <img src={team2image} alt= "team2image"/>

        </div>
        <div class="card col-6 col-sm-3">
            <img src={team3image} alt= "team3image"/>

        </div>
        </div>
    
    
   </div> 
    
  );
}

export default Team;
