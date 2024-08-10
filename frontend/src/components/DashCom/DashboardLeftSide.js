import './DashboardLeftSide.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardLeftSide({ setCurrentContent }) {
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <img src="/pictures/VirtualLab Logo.png" />
                </div>

                <div className='search-box1'>
                    <input type='text' placeholder='search here...' />
                </div>
                <div className="menubelowsearch">
                    <p>Menu</p>
                </div>

                <div className='Dash1'>
                    <p>Dashboard</p>
                </div>

                <div className="menu--list">
                    <div className='item' onClick={() => setCurrentContent('profile')}>
                        Profile
                    </div>

                    <div className='item' onClick={() => setCurrentContent('dashboard')}>
                        Quizzes
                    </div>

                    <div className='item' onClick={() => setCurrentContent('dashboard')}>
                        Experiments
                    </div>

                    <div className='item' onClick={() => setCurrentContent('dashboard')}>
                        AI chat
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLeftSide;
