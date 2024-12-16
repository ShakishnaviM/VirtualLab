import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TheoryHeader.css'

function TheoryHeader(){
    const { subject, index } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/subjects/practicals/${subject}/${subject}practicals?subject=${subject}`);
                setData(response.data[index]);
            } catch (error) {
                console.error("There was an error fetching the data!", error);
            }
        };
        fetchData();
    }, [subject, index]);

    if (!data) {
        return <div>Loading...</div>;
    }
    return(
        <>
            
            <div className="heading">
                
                {data.tests.map(test => (
                <div key={test._id}>
                    <h2>{test.test_name}</h2>
                    </div>
            ))}
                <span className='date'><center>Syllabus Updated 2024 Unit 01 Mechanics</center></span>
               
            </div>

            <div className='Featuredimage'>
            /*{data.tests.map(test => (
                <div key={test._id}>
                   
                    <img src={test.image} alt={test.test_name} />

                    </div>
            ))}
            </div>
        </>
    )
}

export default TheoryHeader