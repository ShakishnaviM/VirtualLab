import './TheorySteps.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TheorySteps() {
    const { subject, index } = useParams();
    const [data, setData] = useState(null);
    const [selectedStep, setSelectedStep] = useState(null);
    const [generatedImage, setGeneratedImage] = useState(""); // To store the generated image URL
    const [isGenerating, setIsGenerating] = useState(false); // Loading state for image generation

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

    const handleStepClick = async (stepIndex) => {
        if (selectedStep === stepIndex) {
            setSelectedStep(null); // Unselect if the same step is clicked again
            setGeneratedImage(""); // Clear the generated image
        } else {
            setSelectedStep(stepIndex);
    
            // Generate an image for the clicked step
            const prompt = data.tests[0].procedure[stepIndex].instruction; // Use the instruction as the prompt
            setIsGenerating(true); // Start loading
            try {
                const imageUrl = await generateImage(prompt); // Call the generateImage function
                setGeneratedImage(imageUrl); // Set the generated image
            } catch (error) {
                console.error("Error generating image:", error);
            } finally {
                setIsGenerating(false); // Stop loading
            }
        }
    };

    const generateImage = async (prompt) => {
        try {
            const response = await fetch("https://9923-35-230-25-178.ngrok-free.app/generate-image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: prompt }),
            });
    
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
    
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            return imageUrl; // Return the object URL
        } catch (error) {
            console.error("Error generating image:", error);
            throw error; // Re-throw the error for further handling
        }
    };
    
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="theory-steps-container">
            <h2>Steps Involved</h2>
            <div className="steps-progress-bar">
                {data.tests[0].procedure.map((step, stepIndex) => (
                    <div
                        key={step._id}
                        className={"step-item ${selectedStep === stepIndex ? 'active' : ''}"}
                        onClick={() => handleStepClick(stepIndex)}
                    >
                        <div className="step-number">{stepIndex + 1}</div>
                    </div>
                ))}
            </div>
            {selectedStep !== null && (
                <div className="step-content">
                    <p>{data.tests[0].procedure[selectedStep].instruction}</p>
                    {isGenerating ? (
                        <p>Generating image...</p>
                    ) : (
                        generatedImage && <img src={generatedImage} alt="Generated step visual" />
                    )}
                </div>
            )}
        </div>
    );
}

export default TheorySteps;