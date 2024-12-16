import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEnvelopeOpen, faBell } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const images = ['pictures/pp.png'];

function Topbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const { currentUser } = useSelector((state) => state.user);

    return (
        <>
            <div className='contentheader'>
                <div className='headeractivity'>
                    <div className='searchbox'>
                        <input type='text' placeholder='Type to search here...' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='fa' />
                    </div>
                    <div className='notify1'>
                         <center><div className='WelcomeBox'>
                             <p>Welcome to Admin Panel</p>
                         </div></center>
                        <div className='notify'>
                            <div className="propic">
                                {images.length > 0 && (
                                    <img
                                        src={currentUser?.profilePicture || user?.profilePicture}
                                        alt='profile'
                                    />
                                )}
                            </div>
                            <div className='nameofuser'>
                                <li>{currentUser?.username || user?.username}</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topbar;
