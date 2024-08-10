import { FaPlay } from "react-icons/fa";
import './PracticalFooter.css';
import { useParams, Link } from 'react-router-dom';

function PracticalFooter() {
    const { subject, index } = useParams();
    return (
        <>
            <div className="footer">
                <div className="btns">
                    <button className="Widebtn">See Courses</button>
                    <Link to={`/PracticalSteps/${subject}/${index}`}>
                        <button className="playbtn"><FaPlay /> Start Practical</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PracticalFooter;
