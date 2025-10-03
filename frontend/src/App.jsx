import Home from './pages/home/home.jsx'
import SignUpContainer from './pages/signUp/signUpContainer.jsx'
import LoginContainer from './pages/login/loginContainer.jsx';
import ProfileContainer from './pages/profile/profileContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-up" element={<SignUpContainer/>} />
          <Route path="log-in" element={<LoginContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
      
  )
}

export default App
