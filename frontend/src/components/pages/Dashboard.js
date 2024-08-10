import { useState } from 'react';
import DashboardLeftSide from '../DashCom/DashboardLeftSide';
import Dashcontent from '../DashCom/DashContent';
import Profile from '../DashCom/Profile'
import Topbar from '../DashCom/Topbar';

import './Dashboard.css';

function Dashboard() {
    const [currentContent, setCurrentContent] = useState('dashboard'); // State to manage current content

    const renderContent = () => {
        switch (currentContent) {
            case 'profile':
                return <Profile />;
            case 'dashboard':
            default:
                return <Dashcontent />;
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

export default Dashboard;
