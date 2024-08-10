import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {useSelector} from 'react-redux';

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const {currentUser} = useSelector((state) => state.user);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 100;

      setPrevScrollPos(currentScrollPos);
      setIsNavVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`pic ${isNavVisible ? '' : 'nav-hidden'}`}>
      <img src="/pictures/logo.svg" className='logoImg'/>

      <div className="nav-links">
        <ul>
          <Link to='/' className='link' style={{textDecoration:'none'}}>
            <li>Home</li>
          </Link>
          <Link to='/Subjects' className='link' style={{textDecoration:'none'}}>
            <li>Subjects</li>
          </Link>
          <Link to='/Dashboard' className='link'style={{textDecoration:'none'}}>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt="profile" />
            ):(
            <li className='navbtnLogin'>SignIn</li>
          )}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
