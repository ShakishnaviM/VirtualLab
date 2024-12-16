import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdatePractical.css';
import Topbar from './TopBar';

function UpdatePractical() {
    const { subject, id } = useParams(); // Get subject and practical ID from URL
    const navigate = useNavigate();

    const [practicalData, setPracticalData] = useState({
        name: '',
        image: '',
    });

    useEffect(() => {
        // Fetch existing practical data
        const fetchPractical = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/api/subjects/${subject}List/${id}`
                );
                setPracticalData(response.data);
            } catch (error) {
                console.error('Error fetching practical:', error);
            }
        };

        fetchPractical();
    }, [subject, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPracticalData({ ...practicalData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send updated data to the backend
            await axios.put(
                `http://localhost:3001/api/subjects/${subject}List/${id}`,
                practicalData
            );
            alert('Practical updated successfully!');
            navigate(`/Admin/showPracticals/${subject}`); // Navigate back to the list
        } catch (error) {
            console.error('Error updating practical:', error);
            alert('Failed to update practical.');
        }
    };

    return (
        <>
        <Topbar/>
        <div className="update-practical">
            <h2>Update {subject} Practical</h2>
            <form onSubmit={handleSubmit} className="update-form">
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={practicalData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={practicalData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Update Practical</button>
            </form>
        </div>
        </>
    );
}

export default UpdatePractical;
