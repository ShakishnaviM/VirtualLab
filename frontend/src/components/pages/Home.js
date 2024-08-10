import './Home.css'
import Button from 'react-bootstrap/Button';
import AboutUs from '../HomeCom/AboutUs'
import Service from '../HomeCom/Service';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Video from '../HomeCom/Video';
import ChatButton from '../HomeCom/ChatButton';
import { Link } from 'react-router-dom';
  

function Home() {
    

    return ( 
        <>
            <NavBar/>
            
            <div className="containerH">
                <div className="leftcontent">
                    <div className="picture">
                        <img src="/public/pictures/HeaderImage.png" alt="Children doing " />
                    </div>
                </div>
                <div className="rightcontent">

                    <h2 >A WAY TO GO MORE BY</h2>
                    <h2 >DIVING INTO THE </h2>
                    <h2 >EXPERIMENTAL WORLD</h2>

                    <h3>"A way to go more by diving into the </h3>
                    <h3>experimental world"</h3>

                    <Link to='/SignUp'><Button id='signbtn' as="input" type="submit" value="Sign Up" /></Link>
                    
                </div>

            </div>
            <ChatButton/>
            
            <AboutUs/>
          
            <Footer/>
        </>
     );
}

export default Home