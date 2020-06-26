import React from 'react';
import flower from '../../assests/imgs/flower.png'


function Circle() {
  return (
 
    //   <svg height="150" width="150">
    //       <circle cx="75" cy="75" r="70" stroke="#bc6372" strokeWidth="4"  fill="none" ></circle>
    //       <img src={flower} alt="h"/>
    //   </svg>
    <svg id="graph" height="150" width="150">

  <defs>
    <pattern id="image" x="0%" y="0%" height="100%" width="100%"
             viewBox="0 0 512 512">
      <image x="0%" y="0%" width="500" height="500" xlinkHref="https://cdn3.iconfinder.com/data/icons/people-professions/512/Baby-512.png"></image>
    </pattern>
  </defs>
    
  <circle id="sd" class="medium" cx="50%" cy="50%" r="40%" fill="url(#image)" stroke="#bc6372" stroke-width="1%" />
</svg>
 
    
  );
}

export default Circle;
