import React from 'react';
import '../../App.css';
import SlideShow from '../PracticalNavCom/SlideShow';
import PracticalItem from '../PracticalNavCom/PractiaclItem';
import PopPract from '../PracticalNavCom/PopPract';

import img1 from "../images/01.jpg";
import img2 from "../images/02.png";
import img3 from "../images/03.jpg";
import img4 from "../images/04.jpg";
import img5 from "../images/05.jpg";

const collection = [
  { src: img1, caption: "Derived physical quantities and derived units" },
  { src: img2, caption: "Physical quantities without units" },
  { src: img3, caption: "Laboratory practical’s Using measuring instruments" },
  { src: img4, caption: "Lays a foundation for analyzing motion." },
  { src: img5, caption: "Determination of weight of a body" },
];


function PracticalNav(){
    return (
        <>
        {/* <SlideShow
            input={collection}
            ratio={'3:2'}
            mode={'automatic'}
            timeout={'3000'} 
        /> */}

        <PracticalItem/>
        {/* <PopPract/> */}
        </>  
    );
}

export default PracticalNav;