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
    const userID = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser._id;
    
    

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
            saveQuizData();
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

    const saveQuizData = async () => {
        const practicalID = `practical_${Math.floor(Math.random() * 1000)}`; // Generate a random practical ID replace with actual practical ID
        const dataToSend = {
            userID: userID, 
            practicalID: practicalID, 
            practicalSubject: "Biology", 
            completed: true, 
            no_of_correct_answers: score 
        };

        try {
            const response = await axios.post("http://localhost:3001/api/quiz/save", dataToSend); 
            console.log("Quiz data saved successfully:", response.data); 
        } catch (error) {
            console.error("Error saving quiz data:", error); 
        }
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

    const getMedalImage = (score) => {
        if (score > 80) {
            return <img src="/gold.png" alt="Gold Medal" width="60" />;
        } else if (score > 60 && score <= 80) {
            return <img src="/silver.png" alt="Silver Medal" width="60" />;
        } else if (score >= 10 && score <= 60) {
            return <img src="/bronze.png" alt="Bronze Medal" width="60" />;
        } else {
            return <span>No Medal</span>;
        }
      };

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
                    <>
                        <div className='results'>
                            <Row>
                                <Col span={24}><h4>Your Quiz Result</h4></Col>
                            </Row>
                            <Row>
                                <Col className='profpic' span={6}></Col>
                                <Col className='profdesc' span={12}>
                                    
                                    <Row>
                                        <Col className='f-resu' span={24}>
                                            <h2>You Scored {score} out of {questions.length}</h2>
                                        </Col>
                                    </Row>
                                </Col>
                                {/* <Col span={5}><img className='medalpic' src="pictures/medal.jpg" alt="medalpic" /></Col> */}
                            </Row>
                            <div className='f-result'>
                                <Row>
                                    <Col className='col1' span={8}><h5 className='col2'>{score}</h5> <br /> <h4 className='col1'>Score</h4></Col>
                                    <Col className='col1' span={8}><h5 className='col2'>{Math.round((score / questions.length) * 100)}%</h5> <br /> <h4 className='col1'>Percentage</h4></Col>
                                    <Col className='col' span={8}><h5>{getMedalImage(Math.round((score / 5) * 100))}</h5> <br /> <h4 className='col13'>Medal</h4></Col>
                                </Row>
                            </div>
                            <br/><br/>

                            <div className='buttons'>
                                <Button onClick={reset}>Reset</Button> {' '}
                                <a href='/Dashboard'> 
                                    <Button> Done </Button>
                                </a>
                            </div>
                        </div>
                        <br/>
                    </>
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