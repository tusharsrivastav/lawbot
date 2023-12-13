import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './App.css';

import Home from './Pages/home';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
