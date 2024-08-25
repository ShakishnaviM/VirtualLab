import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './subjectBox.css';

function AdminSubjectList () {
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
        <div className="container">
            <h1>Subjects List</h1>
            <ul>
                {subjects.map((subject) => (
                    <li key={subject._id}>{subject.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminSubjectList;
