import React from 'react'
import './AboutUs.css'
import './Slideshow'
import Slideshow from './Slideshow'


function About() {
    return (
        <>
        <div className="containerA">
            <div className="heade"></div>

            <div className="bigbox">
            
              <div className="minibox">
                <div className="partA">
                   <img src='pictures/practicals.png' className='minipics'></img> 
                </div>

                <div className="partB">
                    <p>100+</p>
                    <p>Practicals</p>
                </div>
              </div>

              <div className="minibox">
                <div className="partA">
                  <img src='pictures/AI.png' className='minipics'></img> 
                </div>

                <div className="partB">
                    <p>AI</p>
                    <p >Assistance</p>
                </div>
              </div>

              <div className="minibox">

                <div className="partA">
                  <img src='/pictures/evalution.png' className='minipics'></img> 
                </div>

                <div className="partB">
                    <p>Self</p>
                    <p>Evaluation</p>
                </div>
              </div>

            </div>

          <div className="AU">
            <h2>About Us</h2>
            <div className="under"></div>
          </div>

          <Slideshow/>

        </div>
        </>
      )
}

export default About