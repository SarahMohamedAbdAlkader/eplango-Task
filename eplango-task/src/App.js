import React from 'react';
import WelcomePage from './components/welcome/welcomePage'
import Mobile from './components/bestMobileAppPage/mobileApp'
import Awesomefeatures from './components/awesomeFeatures/awesomeFeatures'
import Clients from './components/happyClients/Clients'
import Team from './components/team/team'
import SupportClients from './components/supportClients/SuppotClients'
import { Icon } from 'react-icons-kit'
import { clubs } from 'react-icons-kit/icomoon/clubs'
import { laptop } from 'react-icons-kit/icomoon/laptop'
import { appleinc } from 'react-icons-kit/icomoon/appleinc'

import { ic_brush } from 'react-icons-kit/md/ic_brush'
import './App.css';

function App() {

  return (
    <div >

      <WelcomePage />
      <div class="row container d-flex justify-content-around mx-auto mt-5 mb-5 text-center">
        <div class="col-md-3 text-center " >

          <div id="circle" class="  d-flex justify-content-center mx-auto  " style={{ color: "#bc6372" }}>
            <Icon class="icon  " size={44} icon={clubs} />
          </div>

          <p class="font-weight-bold ">BUILD SHOWCASE</p>
          <p class="text-muted ">Nam limber tempour cum solute nobes elif end option congo nhi jhdj</p>
        </div>
        <div class="col-md-3 text-center">

          <div id="circle" class="  d-flex justify-content-center mx-auto  " style={{ color: "#bc6372" }}>
            <Icon class="icon" size={44} icon={laptop} />
          </div>
          <p class="font-weight-bold ">FULL RESPONSIVE</p>
          <p class="text-muted ">Nam limber tempour cum solute nobes elif end option congo nhi jhdj</p>
        </div >
        <div class="col-md-3 text-center">

          <div id="circle" class="  d-flex justify-content-center mx-auto  " style={{ color: "#bc6372" }}>
            <Icon class="icon" size={44} icon={appleinc} />
          </div>
          <p class="font-weight-bold ">RETINA READY</p>
          <p class="text-muted ">Nam limber tempour cum solute nobes elif end option congo nhi jhdj</p>
        </div >
        <div class="col-md-3 text-center">

          <div id="circle" class="  d-flex justify-content-center mx-auto  " style={{ color: "#bc6372" }}>

            <Icon class="icon" size={44} icon={ic_brush} />

          </div>
          <p class="font-weight-bold ">UNIQUE DESIGN</p>
          <p class="text-muted ">Nam limber tempour cum solute nobes elif end option congo nhi jhdj</p>
        </div >
      </div>


      <Mobile />
      <Awesomefeatures />
      <Clients />
      <Team />

      <div class="margin">
        <SupportClients />
      </div>








    </div>

  );
}

export default App;
