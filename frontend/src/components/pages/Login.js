import Form from "../LoginCom/Form";
import './Login.css';
import SignRightSide from '../LoginCom/SignRightSide'

function Login() {
    return ( 
        <>
         <div className="logincontSign">
      <div className="loginflexy">
          <SignRightSide/>
         <Form/>

       </div>
       </div>
        </>
     );
}

export default Login;
