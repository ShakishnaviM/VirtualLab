import './DashContent.css'
import ImageSlider from './ImageSlider';
import { useState, useEffect } from 'react';
import { Col, Progress, Row } from 'antd';

const course = [
  
    {
    title: "Physics",
    duration:'2 Hours',
    progress:0,

  },

  {
    title: "Chemistry",
    duration:'2 Hours',
    progress:0    
  },
  
  {
    title: "Biology",
    duration:'2 Hours',
    progress:0,
    
  },
  
  {
    title: "Information Technology",
    duration:'2 Hours',
    progress:0,
  },

  
  
]

function Dashcontent() {

  const [courses, setCourses] = useState(course);
  const userID = '661feaf6361ab29bad028f9d'

  async function fetchProgressData(userID) {
    console.log(`Sending request with userID: ${userID}`);
    try {
        const response = await fetch("http://localhost:3001/api/dashboard/progress", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userID:userID }) // Adjust as needed
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const progressData = await response.json();
        console.log(progressData);
        return progressData;
    } catch (error) {
        console.error('Error fetching progress data:', error);
        return null; // Handle the error appropriately in your application
    }
}

  useEffect(() => {
    console.log("from here",userID);
    const fetchAndUpdateCourses = async () => {
        const progressData = await fetchProgressData(userID);
        if (progressData) {
            const updatedCourses = course.map(c => ({
                ...c,
                progress: progressData.progress[c.title]?.completed ?? 0
            }));
            setCourses(updatedCourses);
        } else {
            console.error('Failed to fetch or update progress data');
        }
    };

    fetchAndUpdateCourses();
}, [userID]);

    return (
        <>
        <div className="containerDash">
        <div className="text-center00">
        <div className="text-center0">
          <h1 className="display-4">Dashboard</h1>
          <p className="lead">Your Progress</p>
    
        </div>
        <div className='helpBox'>
          <p>Hi, I'm here to help you!</p>
            <img src='pictures/proflile.png' className='pp'></img>
          
          </div>
        </div>
        <div className='card-container'>
          {courses.map((item) => (
            <div className="card">
              <div className="card--title">
              <Row>
                <Col>
                <h2>{item.title}</h2>
                <div className="underline">
                {/* <Circle progress={item.progress}/> */}
    
                </div>
                </Col>
                <Col xs={5} offset={1}>

                <Progress size={90} type="dashboard" percent={item.progress} />
                </Col>
              </Row>
               
              </div>
    
            </div>
          
          ))}
           
           </div></div>
           <ImageSlider/>
        
        </>
      )
}

export default Dashcontent;