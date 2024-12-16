import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubjectCard from './SubjectCard';
import './subjectBox.css';
import ImageSlider from './slider';
import { useNavigate } from 'react-router-dom';

const Subjects = () => {
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();

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

    const handleSubjectClick = (subjectName) => {
        navigate(`/Admin/showPracticals/${subjectName.toLowerCase()}`);
    };

    return (
        <>
        <div className="subject-grid">
            {subjects.map((subject) => (
               <SubjectCard 
               key={subject._id} 
               subject={subject} 
               onClick={(e) => { 
                   e.preventDefault(); // Prevent default behavior
                   handleSubjectClick(subject.name); 
               }} 
           />
           
            ))}
            
        </div>
        
        <ImageSlider/>
       
       
        </>
       
        
        
    );
};

export default Subjects;
