import CreateAccountForm from '../SignUpCom/CreateAccountForm';
import './SignUp.css';
import SignRightSide from '../SignUpCom/SignUpRightSide';

function SignUp() {
    return ( 
        <>

        
      <div className="contSign">
      <div className="flexy">
          <SignRightSide/>
          <CreateAccountForm/>

       </div>
       </div>
        </>
     )
}

export default SignUp