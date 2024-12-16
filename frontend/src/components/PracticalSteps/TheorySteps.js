import './TheorySteps.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TheorySteps() {
    const { subject, index } = useParams();
    const [data, setData] = useState(null);
    const [selectedStep, setSelectedStep] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/subjects/practicals/${subject}/${subject}practicals?subject=${subject}`);
                setData(response.data[index]);
            } catch (error) {
                console.error("There was an error fetching the data!", error);
            }
        };
        fetchData();
    }, [subject, index]);

    const handleStepClick = (stepIndex) => {
        if (selectedStep === stepIndex) {
            setSelectedStep(null); // Unselect if the same step is clicked again
        } else {
            setSelectedStep(stepIndex);
        }
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="theory-steps-container">
            <center><h2>Steps Involved</h2></center>
            <div className="steps-progress-bar">
                {data.tests[0].procedure.map((step, stepIndex) => (
                    <div key={step._id} className={`step-item ${selectedStep === stepIndex ? 'active' : ''}`} onClick={() => handleStepClick(stepIndex)}>
                        <div className="step-number">{stepIndex + 1}</div>
                    </div>
                ))}
            </div>
            {selectedStep !== null && (
                <div className="step-content">
                    <p>{data.tests[0].procedure[selectedStep].instruction}</p>
                    <img src={data.tests[0].procedure[selectedStep].Image} alt="Step Image" />
                </div>
            )}
        </div>
    );
}

export default TheorySteps;
