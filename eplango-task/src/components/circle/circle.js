import React from 'react';


function Circle() {
  return (

    <svg id="graph" height="150" width="150">

  <defs>
    <pattern id="image" x="0%" y="0%" height="100%" width="100%"
             viewBox="0 0 512 512">
      <image x="0%" y="0%" width="500" height="500" alt="icon" xlinkHref="https://cdn3.iconfinder.com/data/icons/people-professions/512/Baby-512.png"></image>
    </pattern>
  </defs>
    
  <circle id="sd" class="medium" cx="50%" cy="50%" r="40%" fill="url(#image)" stroke="#bc6372" stroke-width="1%" />
</svg>
 
    
  );
}

export default Circle;
