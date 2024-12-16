import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PracticalCard from './PracticalCard';
import './PracticalList.css';

function PracticalList () {
    const { subject } = useParams();
    console.log('Subject from URL:', subject);
        const [practicals, setPracticals] = useState([]);

    useEffect(() => {
        if (subject) {
            const fetchPracticals = async () => {
                try {
                    const response = await axios.get(`http://localhost:3001/api/subjects/${subject}List?subject=${subject}`);
                    setPracticals(response.data);
                } catch (error) {
                    console.error('Error fetching practicals:', error);
                }
            };
            fetchPracticals();
        }
    }, [subject]);
    

    return (
        <div className="practical-list">
            <h2>{subject} Practicals</h2>
            <div className="practicals-grid">
                {practicals.map((practical) => (
                    <PracticalCard
                        key={practical._id}
                        practical={practical}
                        subjectId={subject}
                        practicalId={practical._id}
                    />
                ))}
            </div>
        </div>
    );
};

export default PracticalList;
