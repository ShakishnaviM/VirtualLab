import './DashContent.css';
import ImageSlider from './ImageSlider';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Col, Progress, Row, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

const course = [
  {
    title: "Physics",
    duration: '2 Hours',
    progress: 0,
  },
  {
    title: "Chemistry",
    duration: '2 Hours',
    progress: 0,
  },
  {
    title: "Biology",
    duration: '2 Hours',
    progress: 0,
  },
  {
    title: "Information Technology",
    duration: '2 Hours',
    progress: 0,
  },
];

function Dashcontent() {
  const [courses, setCourses] = useState(course);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        try {
            setUser(JSON.parse(storedUser));
        } catch (error) {
            console.error('Failed to parse stored user:', error);
        }
    } else {
        console.log('No user found in localStorage.');
    }
  }, []);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const userID = user?._id || currentUser?._id;
    if (userID) {
      fetchAndUpdateCourses(userID);
    } else {
      console.error("User ID is undefined or currentUser is not available");
    }
  }, [currentUser || user]);

  async function fetchProgressData(userID) {
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
      return progressData;
    } catch (error) {
      console.error('Error fetching progress data:', error);
      return null;
    }
  }

  async function fetchAndUpdateCourses(userID) {
    const progressData = await fetchProgressData(userID);
    if (progressData) {
      const percentages = progressData.percentages;
      const updatedCourses = course.map((c) => {
        const progress = percentages[c.title]?.completed;
        return {
          ...c,
          progress: parseFloat(progress) || 0,
        };
      });
      setCourses(updatedCourses);
    } else {
      console.error('Failed to fetch or update progress data');
    }
  }

  const handleSubjectClick = (subjectName) => {
    navigate(`/subjectList/${subjectName.toLowerCase()}`);
  };

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
            <img src='pictures/proflile.png' className='pp' alt="profile" />
          </div>
        </div>
        <div className='card-container'>
          {courses.map((item) => (
            <div className="card" key={item.title} onClick={() => handleSubjectClick(item.title)}>
              <div className="card--title">
                <Row>
                  <Col span={24}>
                    <h2>{item.title}</h2>
                    <div className="underline">
                      <Flex>
                        <Progress percent={item.progress} />
                      </Flex>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageSlider />
    </>
  );
}

export default Dashcontent;

