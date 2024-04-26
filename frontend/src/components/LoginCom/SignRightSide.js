import './SignRightSide.css';
import Physics from '../../assets/Physics.jpg';


function SignRightSide() {
    return ( 
        <>
        <div className="rightside">
            <img src={Physics} id='rightside' />
            <h1>"Science is the pursuit of truth through observation and experiment." <br/> -Claude Bernard</h1>
        </div>
        </>
     );
}

export default SignRightSide;