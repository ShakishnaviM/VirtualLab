import React from "react";
import './OAuth.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase';
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleGoogleClick = async (event) => {
        event.preventDefault();
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch("http://localhost:3001/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                    stream: "Bio Science"
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            
            // Save user data to localStorage
            localStorage.setItem('user', JSON.stringify(data.user));

            navigate('/Dashboard');
            console.log(data);
        } catch (error) {
            console.log('Could not login with Google', error);
        }
    }

    return (
        <>
            <p className="textSign">Or</p>
            <button 
                type="button" 
                className="google"
                onClick={handleGoogleClick}>
                <img src="/pictures/google.png" alt="Google logo"/>
                Continue with Google
            </button>
        </>
    );
}

export default OAuth;
