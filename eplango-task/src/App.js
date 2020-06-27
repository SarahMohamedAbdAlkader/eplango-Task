import React from 'react';
import WelcomePage from './components/welcome/welcomePage'
import Circle from './components/circle/circle'
import Mobile from './components/bestMobileAppPage/mobileApp'
import Awesomefeatures from './components/awesomeFeatures/awesomeFeatures'
import Clients from './components/happyClients/Clients'
import Team from './components/team/team'
import './App.css';

function App() {
  
  return (
 <div >
  
      <WelcomePage/>
      <div class="row  d-flex justify-content-around mx-auto mt-5 mb-5">
       <div class="col-md-3 text-center">
      < Circle />
      <p class="font-weight-bold ">BUILD SHOWCASE</p>
      <p class="text-muted ">Nam limber tempour cum solute nobes elif end option congo nhi jhdj</p>
      </div>
      <div class="col-md-3 text-center">
      < Circle />
      <p class="font-weight-bold ">FULL RESPONSIVE</p>
      <p class="text-muted ">Nam limber tempour cum solute nobes elif end option congo nhi jhdj</p>
      </div >
      <div class="col-md-3 text-center">
      < Circle />
      <p class="font-weight-bold ">RETINA READY</p>
      <p class="text-muted ">Nam limber tempour cum solute nobes elif end option congo nhi jhdj</p>
      </div >
      <div class="col-md-3 text-center">
      < Circle />
      <p class="font-weight-bold ">UNIQUE DESIGN</p>
      <p class="text-muted ">Nam limber tempour cum solute nobes elif end option congo nhi jhdj</p>
      </div >
      </div>
  
      <Mobile />
      <Awesomefeatures />
      
     
      <Clients />
      <Team />
   </div> 
    
  );
}

export default App;
