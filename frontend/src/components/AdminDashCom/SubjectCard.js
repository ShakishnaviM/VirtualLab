import React from 'react';
import './SubjectCard.css';

function SubjectCard  ({ subject, onClick }) {

    return (
        <div className="subject-card" onClick={onClick}>
            <img src={subject.image} alt={subject.name} className="subject-image" />
            <div className="subject-info">
                <h3>{subject.name}</h3>
                
            </div>
        </div>
    );
};

export default SubjectCard;
