import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import {store, persistor} from './redux/store.js'; // Import your Redux store
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import SubjectNavigation from './components/pages/SubjectNavigation';
import Login from './components/pages/Login';
import PracticalNav from './components/pages/PracticalNav';
import PracticalTheory from './components/pages/PracticalTheory';
import PracticalSteps from './components/pages/PracticalSteps';
import Quiz from './components/pages/quiz';
import Review from './components/pages/review';
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from './components/PrivateRoute.js';
import Profile from './components/DashCom/Profile';
import Chatbot from './components/ChatCom/chatbot'
import DashboardQuizz from './components/pages/DashboardQuizz.js';


import { Protected } from './components/LoginCom/Protected.js';
import { UserProtect } from './components/LoginCom/UserProtect.js';


function App() {
  return (
    <>
      <Provider store={store}> 
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <Routes>
              <Route path='/' exact element={<Protected><Home /></Protected>} /> //add home route
              <Route path='/SignUp' exact element={<SignUp />} />
              <Route element = {<PrivateRoute/>}>
                   <Route path='/Dashboard' exact element={<Protected><Dashboard /></Protected>} />
              </Route>
              <Route element = {<PrivateRoute/>}>
                   <Route path='/Profile' exact element={<Protected><Profile /></Protected>} />
              </Route>
              <Route path='/Subjects' exact element={<Protected><SubjectNavigation /></Protected>} />
              <Route path='/Login' exact element={<Login />} />
              <Route path='/subjectList/:subject' exact element={<Protected><PracticalNav /></Protected>} />
              <Route path="/singlepractical/:subject/:index" exact element={<Protected><PracticalTheory /></Protected>} />
              <Route path='/PracticalSteps/:subject/:index' exact element={<Protected><PracticalSteps /></Protected>} />
              <Route path='/quiz' exact element={<Protected><Quiz /></Protected>} />
              <Route path='/Review' exact element={<Protected><Review /></Protected>} />
              <Route path='/chatbot' exact element={<Protected><Chatbot/></Protected>}/>
              <Route path='/DashboardQuiz' exact element={<Protected><DashboardQuizz/></Protected>}/>
           
            </Routes>
          </Router>
        </PersistGate>
      </Provider>


    </>
  );
}

export default App;
