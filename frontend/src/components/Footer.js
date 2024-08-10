import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faMailchimp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (  
        <>
        <div className="footerl">
            <div className="fcontent">
                <div className="footcontent">
                <img src="/pictures/Full_logo.svg" className='logoImg'/>
                    <p className='dess'>Hey Champ!
                    Dive into interactive experiments,
                    test your knowledge with quizzes,
                  receive personalized feedback,
                    and explore the endless possibilities of our virtual lab.
                   Join us on this exciting journey of discovery and learning.</p>
                </div>
                
               
            </div>  


            
           
            <div className="fcontent">
                <h2>Contact Us</h2>
                <p className='list'>NO 435, Galle Road, Colombo 03, Sri Lanka +94) 705-03-9527 virtualLab.Sab@gmail.com</p>
            </div>

            <div className="fcontent">
            <div className="socialmedia">
                    <ul type="">
                        <li><FontAwesomeIcon icon={faFacebook} className=' text-3xl' /></li>
                        <li><FontAwesomeIcon icon={faTwitter}  className=' text-3xl' /></li>
                        <li><FontAwesomeIcon icon={faInstagram}  className=' text-3xl'/></li>
                        <li><FontAwesomeIcon icon={faWhatsapp}  className=' text-3xl'/></li>
                        <li><FontAwesomeIcon icon={faFacebookMessenger}  className=' text-3xl'/></li>
                    </ul>
                </div>
            </div>
                
      
        </div>
        </>
    );
}

export default Footer;