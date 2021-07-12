import React, {  } from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';

import web from './images/home-img.svg';
const Home = () => {
    return(
        <>
           <Common
                name="Grow Your Business" 
                imgsrc={web} 
                visit="/service"
                btname="Get Started" 
            />
        </>
    );
}

export default Home;