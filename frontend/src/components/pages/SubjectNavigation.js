import NavBar from '../NavBar';
import BeforeLastBox from '../SubjectCom/BeforeLastBox';
import DisplayBoX from '../SubjectCom/DisplayBox';
import LastBox from '../SubjectCom/LastBox';

import Subjects from '../SubjectCom/Subjects';
import './SubjectNavigation.css';


function SubjectNavigation() {
    return ( 
        <>
        <div className='nav'> 
            <NavBar/>
        </div>   
        <div className="subNavContainer">  
        
            <div className="SecondSec">
                <DisplayBoX></DisplayBoX>
            </div> 
            
            <div className='sub'>
                <Subjects/>
            </div>
       
           

            <div className="ThirdSec">
                <BeforeLastBox></BeforeLastBox>   
            </div> 

            <div className="LastSec">
                <LastBox></LastBox>   
            </div>
            
        
        </div> 
    

         </>
        
     );
}

export default SubjectNavigation;