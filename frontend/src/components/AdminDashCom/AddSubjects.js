import React, { useState } from 'react';
import axios from 'axios';
import './AddSubjects.css';

function AddSubjects() {
    const [subjectName, setSubjectName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/subject', { name: subjectName });
            console.log('Subject added successfully:', response.data);
            setSubjectName(''); // Clear the input field after submission
        } catch (error) {
            console.error('Error adding subject:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Subject</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="subjectName">Subject Name</label>
                    <input
                        type="text"
                        id="subjectName"
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Add Subject</button>
            </form>
        </div>
    );
}

export default AddSubjects;
