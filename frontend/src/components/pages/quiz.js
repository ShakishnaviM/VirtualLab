import './quiz.css';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Quiz() {
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const option_array = [Option1, Option2, Option3, Option4];

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/subjects/practicals/biologypracticals?subject=biology');
                console.log("Fetched questions:", response.data); // Log the data structure

                // Flatten the array of questions across all tests
                const allQuestions = response.data.reduce((acc, test) => {
                    return acc.concat(test.questions || []);
                }, []);

                setQuestions(allQuestions);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const checkAns = (e, ans) => {
        if (!lock) {
            console.log(`Selected answer: ${ans}, Correct answer: ${questions[index].ans}`);
            if (parseInt(questions[index].ans, 10) === ans) {
                e.target.classList.add("correct");
                console.log("Correct Answer!");
                setScore(prevScore => {
                    const newScore = prevScore + 1;
                    console.log(`Updated Score: ${newScore}`);
                    return newScore;
                }); // Use functional update to ensure correct score update
            } else {
                e.target.classList.add("wrong");
                const correctOption = option_array[questions[index].ans - 1];
                if (correctOption && correctOption.current) {
                    correctOption.current.classList.add("correct");
                }
            }
            setLock(true);
        }
    };

    const next = () => {
        if (index === questions.length - 1) {
            setResult(true);
            return;
        }
        setIndex(prevIndex => prevIndex + 1);
        setLock(false);

        // Reset the classes for the options
        option_array.forEach(option => {
            if (option && option.current) {
                option.current.classList.remove("wrong", "correct");
            }
        });
    };

    const reset = () => {
        setIndex(0);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    if (!questions[index] || !questions[index].question) {
        console.error('Question data is missing or invalid:', questions[index]);
        return <div>Question not available</div>;
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
                            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{questions[index].option1}</li>
                            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{questions[index].option2}</li>
                            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{questions[index].option3}</li>
                            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{questions[index].option4}</li>
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
