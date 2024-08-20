import './quiz.css';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Quiz() {
    const navigate = useNavigate();
    const { subject, indexq } = useParams();  // Get subject and indexq from the URL parameters

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const optionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                // Fetching the specific practical data using the subject and indexq
                const response = await axios.get(`http://localhost:3001/api/subjects/practicals/${subject}practicals?subject=${subject}`);
                const practical = response.data[indexq];  // Use indexq to select the specific practical
                setQuestions(practical.questions || []);  // Set the questions from the specific practical
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [subject, indexq]);  // Re-run effect when subject or indexq changes

    const checkAns = (e, ans) => {
        if (!lock) {
            if (questions[index].ans === ans) {
                e.target.classList.add("correct");
                setScore(prevScore => prevScore + 1);  // Increment score if the answer is correct
            } else {
                e.target.classList.add("wrong");
                optionRefs[questions[index].ans - 1]?.current.classList.add("correct");  // Mark correct answer
            }
            setLock(true);  // Lock to prevent further selection
        }
    };

    const next = () => {
        if (index === questions.length - 1) {
            setResult(true);  // Show results if it's the last question
            return;
        }
        setIndex(prevIndex => prevIndex + 1);  // Move to the next question
        setLock(false);

        // Reset the styles for the next question
        optionRefs.forEach(ref => {
            ref.current?.classList.remove("wrong", "correct");
        });
    };

    const reset = () => {
        setIndex(0);
        setScore(0);
        setLock(false);
        setResult(false);  // Reset the quiz
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;  // Show loading while fetching questions
    }

    if (!questions[index] || !questions[index].question) {
        return <div>Question not available</div>;  // Handle case where question data is missing
    }

    return (
        <>
            <div className='fulldiv'>
                <div className='title1'>
                    <h2 className='heading1'>Let’s Start the Quiz</h2>
                    <hr className='hr1' />
                </div>
            </div>
            <div className='container'>
                <h3>ALL THE BEST!</h3>
                <hr />
                {result ? (
                    <div className='results'>
                        <Row>
                            <Col span={24}><h4>Grade 12 - Semester 2 - Practical No.03</h4></Col>
                        </Row>
                        <Row>
                            <Col className='profpic' span={6}><img src="pictures/user.jpg" alt="User" /></Col>
                            <Col className='profdesc' span={12}>
                                <Row>
                                    <Col className='name' span={24}><h5>John Smith</h5></Col>
                                </Row>
                                <Row>
                                    <Col className='emal' span={24}><h5>johnSmith@gmail.com</h5></Col>
                                </Row>
                                <Row>
                                    <Col className='f-resu' span={24}>
                                        <h2>You Scored {score} out of {questions.length}</h2>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={5}><img className='medalpic' src="pictures/medal.jpg" alt="medalpic" /></Col>
                        </Row>
                        <div className='f-result'>
                            <Row>
                                <Col className='col' span={8}><h5>{score}</h5> <br /> <h4>Score</h4></Col>
                                <Col className='col' span={8}><h5>{Math.round((score / questions.length) * 100)}</h5> <br /> <h4>Percentage</h4></Col>
                                <Col className='col' span={8}><h5>{Math.ceil(Math.random() * 10)}</h5> <br /> <h4>Rank</h4></Col>
                            </Row>
                        </div>
                        <br /><br />
                        <div className='buttons'>
                            <button onClick={reset}>Reset</button> {' '}
                            <a href='/Review'>
                                <Button> Done </Button>
                            </a>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2>{index + 1}. {questions[index].question}</h2>
                        <ul>
                            <li ref={optionRefs[0]} onClick={(e) => checkAns(e, 1)}>{questions[index].option1}</li>
                            <li ref={optionRefs[1]} onClick={(e) => checkAns(e, 2)}>{questions[index].option2}</li>
                            <li ref={optionRefs[2]} onClick={(e) => checkAns(e, 3)}>{questions[index].option3}</li>
                            <li ref={optionRefs[3]} onClick={(e) => checkAns(e, 4)}>{questions[index].option4}</li>
                        </ul>
                        <button onClick={next}>Next</button>
                        <div className='index'>{index + 1} of {questions.length} Questions</div>
                    </>
                )}
            </div>
        </>
    );
}

export default Quiz;
