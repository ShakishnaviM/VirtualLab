import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Subjects.css';

const Subjects = () => {
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/subject');
                setSubjects(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubjectClick = (subjectName) => {
        navigate(`/subjectList/${subjectName.toLowerCase()}`);
    };

    return (
        <div>
          
            <div className='Container'>
                {subjects.map(item => (
                    <div className="SubjectBox" key={item._id} onClick={() => handleSubjectClick(item.name)}>
                        <div className="SubjectPic">
                            <img src={item.image} alt="Uploaded" style={{ maxWidth: '225px', maxHeight: '155px',borderRadius:'15px' }} />
                        </div>
                        <h2 className='SubjectBoxh2'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subjects;





