import '../DashCom/DashboardLeftSide.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function AdminDashboardLeftSide({ setCurrentContent }) {
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <Link to='/'><img src="/pictures/VirtualLab Logo.png" alt="VirtualLab Logo" /></Link>
                </div>

                <div className='search-box1'>
                    <input type='text' placeholder='search here...' />
                </div>
                <div className="menubelowsearch">
                    <p>Menu</p>
                </div>

                <div className="menu--list">
                    <div className='item' onClick={() => setCurrentContent('subjects')}>
                        Subjects
                    </div>

                    <div className='item' onClick={() => setCurrentContent('addSubjects')}>
                        Add Subjects
                    </div>
                    <div className='item' onClick={() => setCurrentContent('addPracticals')}>
                        Add Practicals
                    </div>

                </div>
            </div>
        </>
    );
}

export default AdminDashboardLeftSide;
