import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PracticalCard.css';

const PracticalCard = ({ practical, subjectId }) => {
    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate(`/admin/update-practical/${subjectId}/${practical._id}`);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/api/subjects/${subjectId}/practicals/${practical._id}`);
            alert('Practical deleted successfully!');
            // Optionally, you can refresh the list after deletion
            window.location.reload();
        } catch (error) {
            console.error('Error deleting practical:', error);
            alert('Failed to delete practical.');
        }
    };

    return (
        <div className="practical-card">
            <img src={practical.image} alt={practical.name} />
            <h4>{practical.name}</h4>
            <div className="card-actions">
                <button onClick={handleUpdate} className="update-btn">Update</button>
                <button onClick={handleDelete} className="delete-btn">Delete</button>
            </div>
        </div>
    );
};

export default PracticalCard;
