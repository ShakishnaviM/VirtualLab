import { useState } from 'react';
import DashboardLeftSide from '../AdminDashCom/leftSidePanel';
import Subjects from '../AdminDashCom/subjectBox';
import Topbar from '../AdminDashCom/TopBar';
import AddSubjects from '../AdminDashCom/AddSubjects';  
import AddPracticals from '../AdminDashCom/AddPracticals';

import './Dashboard.css';

function AdminDashboard() {
    const [currentContent, setCurrentContent] = useState('subjects'); // State to manage current content

    const renderContent = () => {
        switch (currentContent) {
            case 'addSubjects':
                return <AddSubjects />; 
            case 'addPracticals':
                    return <AddPracticals />; 
            case 'subjects':
            default:
                return <Subjects />;
        }
    };

    return (
        <div className="ContainerDashboard">
            <Topbar />
            <div className="right">
                {renderContent()}
            </div>
            <div className="left">
                <DashboardLeftSide setCurrentContent={setCurrentContent} />
            </div>
        </div>
    );
}

export default AdminDashboard;
