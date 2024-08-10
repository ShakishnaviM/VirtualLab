import './TheorySteps.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Steps from './Steps';

function TheorySteps() {
    const { subject, index } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/subjects/practicals/${subject}practicals?subject=${subject}`);
                setData(response.data[index]);
            } catch (error) {
                console.error("There was an error fetching the data!", error);
            }
        };
        fetchData();
    }, [subject, index]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="section2">
            <h2>Steps Involved</h2>
            <div className="contentClm">
                <div className="stepCLm">
                    {data.tests.map(test => (
                        <div key={test._id}>
                            <h4>Procedure</h4>
                            <ol>
                                {test.procedure.map(step => (
                                    <li key={step._id}>
                                        <Steps text={step.instruction} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
                <img src="/pictures/PracticalSteps_PracticalStepPage.jpg" alt="Practical Steps" />
            </div>
        </div>
    );
}

export default TheorySteps;
