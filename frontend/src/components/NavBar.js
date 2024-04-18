import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isNavVisible, setIsNavVisible] = useState(true);

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
          <Link to='/' className='link' style={{textDecoration:'none'}}><li>Home</li></Link>
          <Link to='/Subjects' className='link' style={{textDecoration:'none'}}><li>Subjects</li></Link>
          <Link to='/login' className='link'style={{textDecoration:'none'}}><li>SignIn</li></Link>
          <li><a href='/Dashboard' className='link'style={{textDecoration:'none'}}><FontAwesomeIcon icon={faUser} /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
