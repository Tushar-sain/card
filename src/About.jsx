import React, {  } from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import web from './images/img6.jpg';
const About = () => {
    return(
        <>
           <Common 
                name="Welcome to About Page" 
                imgsrc={web} 
                visit="/contact"
                btname="Contact Now" 
            />
        </>
    );
}

export default About;