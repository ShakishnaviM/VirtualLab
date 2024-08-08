import React from 'react';
import './DashboardQuizz.css';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'antd';
import { Flex, Progress } from 'antd';

const quizData = [
  { 
    title: 'PHYSICS', 
    practicals: [
      { name: 'Practical Name 1', score: 7, rank: 1, percentage: 70 }, // 7/10
      { name: 'Practical Name 2', score: 5, rank: 2, percentage: 50 }  // 5/10
    ], 
    completedPercent: 50 
  },
  { 
    title: 'CHEMISTRY', 
    practicals: [
      { name: 'Practical Name', score: 8, rank: 1, percentage: 80 }  // 8/10
    ], 
    completedPercent: 50 
  },
  { 
    title: 'BIOLOGY', 
    practicals: [
      { name: 'Practical Name', score: 6, rank: 1, percentage: 60 }  // 6/10
    ], 
    completedPercent: 50 
  },
  { 
    title: 'INFORMATION SYSTEM', 
    practicals: [
      { name: 'Practical Name', score: 9, rank: 1, percentage: 90 }  // 9/10
    ], 
    completedPercent: 50 
  }
];

const QuizCard = ({ title, practicals, completedPercent }) => (
  <Card className='Card' style={{ width: '550px', height: 'auto' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {practicals.map((practical, index) => (
        <div key={index}>
          <br />
          <Card.Subtitle className="mb-2 text-muted" style={{ marginLeft: '20px' }}>{practical.name}</Card.Subtitle>
          <Card.Text className='cardText'>
            <Row>
              <Col>
                Score: {practical.score} <br />
                Rank: {practical.rank}
              </Col>
              <Col className='RightCol'>
                <Flex align="center" wrap gap={30}>
                  <Progress type="circle" percent={practical.percentage} size={50} />
                </Flex>
              </Col>
            </Row>
          </Card.Text>
        </div>
      ))}
    </Card.Body>
  </Card>
);

function DashboardQuizz() {
  return (
    <div>
      <div className='title1'>
        <h2 className='heading1'>Summary of your Quizzes</h2>
        <hr className='hr1'></hr>
      </div>
      <br />
      <div className='CardDiv'>
        {quizData.map((quiz, index) => (
          <React.Fragment key={index}>
            <QuizCard {...quiz} />
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default DashboardQuizz;
