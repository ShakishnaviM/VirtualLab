import { FaPlay } from "react-icons/fa";
import '../PracticalTheoryCom/PracticalFooter.css';
import { useNavigate, useParams } from 'react-router-dom';

function PracticalFooter() {
    const navigate = useNavigate();
    const { subject, index } = useParams(); // Assuming these parameters are available

    const startQuiz = () => {
        navigate(`/quiz/${subject}/${index}`);
    };

    return (
        <>
            <div className="footer">
                <div className="btns">
                    <button className="Widebtn">View Theory</button>
                    <button className="playbtn" onClick={startQuiz}>
                        <FaPlay /> Start Quiz
                    </button>
                </div>
            </div>
        </>
    );
}

export default PracticalFooter;
