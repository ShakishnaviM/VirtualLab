import MiddleBox from './MiddleBox';
import './Service.css';
import Button from 'react-bootstrap/Button';

function Service() {
    return ( 
        <>
        <div className="containerW">
            <div className="whead">
                <h2>Why you want to choose us?</h2>
                <div className="un"></div>
            </div>

            <div className="slidebar">
                <MiddleBox></MiddleBox>
              
            </div>
           
            <div className='end'></div>
        </div>
        </>
     )
}

export default Service