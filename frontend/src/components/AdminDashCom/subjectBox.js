import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubjectCard from './SubjectCard';
import './subjectBox.css';
import ImageSlider from './slider';

const Subjects = ({ onSubjectClick }) => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/subject');
                setSubjects(response.data);
            } catch (error) {
                console.error('Error fetching subjects:', error);
            }
        };
        fetchSubjects();
    }, []);

    return (
        <>
        <div className="subject-grid">
            {subjects.map((subject) => (
                <SubjectCard 
                    key={subject._id} 
                    subject={subject} 
                    onClick={() => onSubjectClick(subject)} 
                />
            ))}
            
        </div>
        
        <ImageSlider/>
       
       
        </>
       
        
        
    );
};

export default Subjects;
