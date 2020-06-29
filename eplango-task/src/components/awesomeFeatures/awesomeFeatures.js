import React from 'react';
import { Icon } from 'react-icons-kit'
import {cogs} from 'react-icons-kit/icomoon/cogs'
import {mail2} from 'react-icons-kit/icomoon/mail2'
import {location} from 'react-icons-kit/icomoon/location'
import {calendar} from 'react-icons-kit/icomoon/calendar'
import {play2} from 'react-icons-kit/icomoon/play2'
import {cloud} from 'react-icons-kit/icomoon/cloud'
import {bubbles} from 'react-icons-kit/icomoon/bubbles'
import {userPlus} from 'react-icons-kit/icomoon/userPlus'

 import titleline2 from '../../assests/imgs/titleline2.png' 

function Awesomefeatures() {
  return (
      <div class="mb-5" class="image">
<img class=" mx-auto d-block"src={titleline2}/>
<h2 class="text-center mt-5">AWESOME FEATURES</h2>
<p class="text-center mt-5 p mb-5">hsh aher we go from there and here jdjdj etc etc etc etc etc etc jdjdj etc etc etc etc etc etc </p>
<div class="row mt-5 d-flex justify-content-around">
    <div class="col-md-3 text-center" >
    <div class="border  rounded-circle circle  d-flex justify-content-center mx-auto  " style={{color:"#ebebeb"}}>
      <Icon class="icon"size={44} icon={cogs}/>
</div>
<h5>ADVANCED SETTING</h5>
<p class="p">shdjoddlkdlkd;dd; lklsl;sl<br/>shdjoddlkdlkd;dd; lklslsl</p>
</div>
<div class="col-md-3 text-center">
<div class="border  rounded-circle circle  d-flex justify-content-center mx-auto  " style={{color:"#ebebeb"}}>
<Icon class="icon"size={44} icon={mail2}/>
</div>

<h5>MESSAGE INBOX</h5>
<p class="p">shdjoddlkdlkd;dd; lklsl;sl<br/>shdjoddlkdlkd;dd; lklslsl</p>
</div>
<div class="col-md-3 text-center">
<div class="border  rounded-circle circle  d-flex justify-content-center mx-auto  " style={{color:"#ebebeb"}}>
<Icon  class="icon"size={44} icon={location}/>
</div>
<h5>MY PLACES</h5>
<p class="p">shdjoddlkdlkd;dd; lklsl;sl <br/>shdjoddlkdlkd;dd; lklslsl</p>
</div>
<div class="col-md-3 text-center">
<div class="border  rounded-circle circle  d-flex justify-content-center mx-auto  " style={{color:"#ebebeb"}}>
<Icon class="icon"size={44} icon={calendar}/>
</div>
<h5>EVENTS CALENDER</h5>
<p class="p">shdjoddlkdlkd;dd; lklsl;sl<br/>shdjoddlkdlkd;dd; lklslsl</p>
</div>
</div>
<div class="row mt-5 d-flex justify-content-around">

    <div class="col-md-3 text-center">
    <div class="border  rounded-circle circle  d-flex justify-content-center mx-auto  " style={{color:"#ebebeb"}}>
    <Icon class="icon"size={44} icon={play2}/>
    </div>
<h5>MEDIA PLAYER</h5>
<p class="p">shdjoddlkdlkd;dd; lklslsl <br/>shdjoddlkdlkd;dd; lklslsl</p>
</div>
<div class="col-md-3 text-center">
<div class="border  rounded-circle circle  d-flex justify-content-center mx-auto  " style={{color:"#ebebeb"}}>
<Icon class="icon"size={44} icon={cloud}/>
</div>
<h5>WEATHER ON-THE-GO</h5>
<p class="p">shdjoddlkdlkd;dd; lklsl;sl <br/>shdjoddlkdlkd;dd; lklslsl</p>
</div>
<div class="col-md-3 text-center">
<div class="border  rounded-circle circle  d-flex justify-content-center mx-auto  " style={{color:"#ebebeb"}}>
<Icon class="icon"size={44} icon={bubbles}/>
</div>
<h5>LIVE CHAT MESSAGES</h5>
<p class="p">shdjoddlkdlkd;dd; lklsl;sl <br/>shdjoddlkdlkd;dd; lklslsl</p>
</div>
<div class="col-md-3 text-center">
<div class="border  rounded-circle circle  d-flex justify-content-center mx-auto  " style={{color:"#ebebeb"}}>
<Icon  class="icon"size={44} icon={userPlus}/>
</div>
<h5>FRIENDS LIST</h5>
<p class="p">shdjoddlkdlkd;dd; lklsl;sl <br/>shdjoddlkdlkd;dd; lklslsl</p>
</div>
</div>
</div>

 
    
  );
}

export default Awesomefeatures;
