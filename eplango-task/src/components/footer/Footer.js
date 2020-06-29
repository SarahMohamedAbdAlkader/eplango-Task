import React,{useState,useEffect} from 'react';
import './Footer.css';
import '../../App.css';
import { behance } from 'react-icons-kit/icomoon/behance'
import { Icon } from 'react-icons-kit'
import posed from 'react-pose';
const Box = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  });
function Footer() {
   const [isVisible, setVisible]=useState(true);
   useEffect(()=>{
    setInterval(() => {
        setVisible(!isVisible)
      }, 2000);
   })
    return (
        <React.Fragment>
            <footer class=" font-small bg-dark text-white pt-4 p-5 " style={{ width: '143.2%' }} >
                <div class="container-fluid text-center ">

                    <div class="row float-center mx-auto  d-flex justify-content-center">
                        <div class=" row">

                        <Box className="box rounded-circle col-md-3 " pose={isVisible ? 'visible' : 'hidden'}><a href="#" class="fa fa-facebook border mr-2"></a></Box>
                        <Box className="box rounded-circle col-md-3 " pose={isVisible ? 'visible' : 'hidden'}><a href="#" class="fa fa-twitter border mr-2"></a></Box>
                         <Box className="box rounded-circle col-md-3 " pose={isVisible ? 'visible' : 'hidden'}><a href="#" class="fa fa-dribbble border mr-2"></a></Box>
                         <Box className="box rounded-circle col-md-3" pose={isVisible ? 'visible' : 'hidden'}><a href="#" class="fa fa-behance border mr-2"></a></Box>
                            {/* <a href="#" class="fa fa-twitter border mr-2"></a>
                            <a href="#" class="fa fa-dribbble border mr-2"></a>
                            <a href="#" class="fa fa-behance border"></a> */}
                            <h2 class="text-uppercase text-center mt-5">Thanks   for  stopping  by  your  website</h2>
                            <p>Here you can use rows and columns to organize your footer content.</p>

                        </div>

                    </div>

                </div>

            </footer>
            <footer class="page-footer secFooter font-small  text-white pt-4 p-2" style={{ width: '143.2%' }} >
                <p class="container"> Copyright © <mark style={{ color: "#bc6372", backgroundColor: "#171824" }}>BootExperts</mark>.All Rights Reserved</p>
            </footer>

        </React.Fragment>

    );
}

export default Footer;
