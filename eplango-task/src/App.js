import React from 'react';
import logo from './logo.svg';
import WelcomePage from './components/welcome/welcomePage'
import Circle from './components/circle/circle'
import flower from './assests/imgs/flower.png'
import './App.css';

function App() {
  
  return (
 <div >
  
      <WelcomePage/>
      <div class="row  d-flex justify-content-around  mt-5 mb-5">
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
    
  
   </div> 
    
  );
}

export default App;
