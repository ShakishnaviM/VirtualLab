import './PracticalItem.css';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PracticalItem() {
    const { subject } = useParams();
    const [practicals, setPracticals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/subjects/${subject}List?subject=${subject}`);
                // http://localhost:3001/api/subjects/${s}List?subject=${subject}`
                setPracticals(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [subject]);
    const handlePracticalClick = (index) => {
        navigate(`/singlepractical/${subject}/${index}`);
      };
    
      return (
        <div className='section'>
          <h2>{subject} Practicals</h2>
            <div className='item'>
            {practicals.map((practical, index) => (
              
              <div className='listDown' key={index} onClick={() => handlePracticalClick(index)}>
                <img src={practical.image} alt={practical.name} />
                <h4 className="head">{practical.name}</h4>
                
                <button className='btn'>Learn More</button>
              </div>
            ))}
            </div>
            <div className='items'>
          </div>
        </div>
      );
    };


export default PracticalItem