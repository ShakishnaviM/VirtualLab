import React, { useState } from 'react';
import './AddPracticals.css';

function AddPracticals() {
    const [formData, setFormData] = useState({
        subjectCategory: '',
        heading: '',
        description: '',
        intro: '',
        images: '',
        featuredImages: '',
        equipment: '',
        observation: '',
        steps: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log('Form Data Submitted: ', formData);
    };

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Practicals</h2>
            <form className="practicals-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="subjectCategory">Subject Category</label>
                    <input 
                        type="text" 
                        id="subjectCategory" 
                        name="subjectCategory"
                        value={formData.subjectCategory}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input 
                        type="text" 
                        id="heading" 
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        id="description" 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="intro">Intro</label>
                    <input 
                        type="text" 
                        id="intro" 
                        name="intro"
                        value={formData.intro}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="images">Images</label>
                    <input 
                        type="text" 
                        id="images" 
                        name="images"
                        value={formData.images}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="featuredImages">Featured Images</label>
                    <input 
                        type="text" 
                        id="featuredImages" 
                        name="featuredImages"
                        value={formData.featuredImages}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="equipment">Equipment (drop down)</label>
                    <input 
                        type="text" 
                        id="equipment" 
                        name="equipment"
                        value={formData.equipment}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="observation">Observation</label>
                    <input 
                        type="text" 
                        id="observation" 
                        name="observation"
                        value={formData.observation}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="steps">Steps</label>
                    <input 
                        type="text" 
                        id="steps" 
                        name="steps"
                        value={formData.steps}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default AddPracticals;
