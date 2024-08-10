import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import './BioPracticals.css'; // Make sure to create a corresponding CSS file for styling

const PracticalAll = () => {
    const { subject, index } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/subjects/practicals/${subject}practicals?subject=${subject}`);
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

    return (
        <div>
            <h1 className='Theory'>Theory</h1>
            <p>{data.theory}</p>
            <h1>Description</h1>
            <p>{data.description}</p>
            <h2>Tests</h2>
            {data.tests.map(test => (
                <div key={test._id}>
                    <h3>{test.test_name}</h3>
                    <h4>Materials</h4>
                    <ul>
                        {test.materials.map(material => (
                            <li key={material._id}>{material.name} - {material.quantity || ''}</li>
                        ))}
                    </ul>
                    <h4>Procedure</h4>
                    <ol>
                        {test.procedure.map(step => (
                            <li key={step._id}>{step.instruction}</li>
                        ))}
                    </ol>
                    <h4>Observations</h4>
                    <p>{test.observations}</p>
                    <h4>Image</h4>
                    <img src={test.image} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '400px' }} />
                </div>
            ))}
        </div>
    );
};

export default PracticalAll;
