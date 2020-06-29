import React from 'react';
import titleline2 from '../../assests/imgs/titleline2.png'
import supportbg from '../../assests/imgs/supportbg.jpg'

import { Icon } from 'react-icons-kit'
import { mail2 } from 'react-icons-kit/icomoon/mail2'
import { ic_headset_mic } from 'react-icons-kit/md/ic_headset_mic'

import Footer from '../footer/Footer'
import '../../App.css';
import './Support.css'


function SupportClients() {

    return (
        <div class="image ">
            <img src={supportbg} />

            <span >
                <div class="text-center ">
                    <img src={titleline2} class="" alt="Responsive image" />
                    <h2 class="text-dark  mb-3">SUPPORT CLIENTS</h2>
                    <p class="p text-center mx-auto d-block "> This paragraph
                    contains a lot of lines
                    in the source code,but the browse ignores it.</p>
                    <div class="card w-75 p-4">
                        <div class="row">
                            <div class=" col-md-8">
                                <form>
                                    <div class="form-group  ">

                                        <input type="text" class="form-control bg-light border border-light" id="exampleInputName" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control bg-light border-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control  bg-light  border-light" rows="5" id="Message" placeholder="Your Message"></textarea>

                                    </div>


                                    <button type="button" class="button float-left font-weight-bold rounded  " >SEND</button>

                                </form>

                            </div>
                            <div class=" ml-5 bg-light col-md-3 ">

                                <div id="circle" class="  d-flex justify-content-center mx-auto  " style={{ color: "#bc6372" }}>
                                    <Icon class="icon" size={44} icon={ic_headset_mic} />
                                </div>

                                <h6 class="text-dark font-weight-bold">TELEPHONES</h6>
                                <p class="p">(+800) 123 456 789</p>
                                <div id="circle" class=" mt-3  rounded-circle circleSmaller  d-flex justify-content-center mx-auto  " style={{ color: "#bc6372" }}>
                                    <Icon class="icon" size={44} icon={mail2} />
                                </div>
                                <h6 class="text-dark font-weight-bold">ADDRESS EMAIL</h6>
                                <p class="p">admin@bootexpert.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </span>


            <Footer />

        </div>

    );
}

export default SupportClients;
