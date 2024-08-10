import './TheoryContent.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




function TheoryContent(){
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

   
    return(
        <>
        <div className="theory">
       
       <h3>Introduction</h3>

       <p> {data.theory}</p>

       <img src="/pictures/PracticalContent_PracTheoryPage.jpg" alt="content of practical"></img>
       
     
       {data.tests.map(test => (
           <div key={test._id}>
               
               <h3>Equipments</h3>
               <ul>
                   {test.materials.map(material => (
                       <li key={material._id}>{material.name} - {material.quantity || ''}</li>
                   ))}
               </ul>
               
           </div>
       ))}
   </div>
        </>
    )
}

export default TheoryContent