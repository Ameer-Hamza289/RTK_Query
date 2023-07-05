import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home  from './pages/Home';
import Login  from './pages/Login';
import Signup  from './pages/Signup';
import './App.css';
import Protected from './routing/Protected';
import Profile from './pages/Profile';


function App() {

  return (
    <div className="App">
      <Router>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Signup />}/>
        <Route element={<Protected/>}>
          <Route path='/user-profile' element={<Profile/>}/>
        </Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
