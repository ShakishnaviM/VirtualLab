import { useState, useEffect } from 'react';
import DashboardLeftSide from '../AdminDashCom/leftSidePanel';
import Subjects from '../AdminDashCom/subjectBox';
import Topbar from '../AdminDashCom/TopBar';
import AddSubjects from '../AdminDashCom/AddSubjects';  
import AddPracticals from '../AdminDashCom/AddPracticals';
import PracticalsList from '../AdminDashCom/PracticalList';  // Import PracticalsList component

import './Dashboard.css';

function AdminDashboard() {
    const [currentContent, setCurrentContent] = useState('subjects'); // State to manage current content
    const [selectedSubject, setSelectedSubject] = useState(null); // State to manage selected subject

    const renderContent = () => {
        switch (currentContent) {
            case 'addSubjects':
                return <AddSubjects />;
            case 'addPracticals':
                return <AddPracticals />;
            case 'practicals': // Case to handle displaying practicals
                return <PracticalsList subject={selectedSubject} />;
            case 'subjects':
            default:
                return <Subjects onSubjectClick={handleSubjectClick} />;
        }
    };

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
        setCurrentContent('practicals');  // Switch to practicals view when a subject is clicked
    };

    return (
        <div className="ContainerDashboard">
            <Topbar />
           <Subjects/>
        </div>
    );
}

export default AdminDashboard;
