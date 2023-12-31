import React, { useState,useEffect } from 'react';
// import { useRegisterUser } from '../features/auth/authActions';
import { useRegisterUserMutation } from '../app/services/auth/authServices';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const {user}=useSelector(state=>state.auth);
  const navigate=useNavigate();
  const [RegisterMutation]=useRegisterUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [registrationStatus,setregistrationStatus]=useState('')
  

  const handleSignup = (e) => {
    e.preventDefault();

    // Call the registerUser mutation
    RegisterMutation({ firstName,email, password })
    .unwrap()
    .then(data=>{
      console.log(data);
      setregistrationStatus("Registration Successfull :)");
      clearRegistrationStatus();
    })
    .catch((err)=>{
      console.log(err);
      setregistrationStatus(err.data.message);
      clearRegistrationStatus();
    });

    // Reset the form
    setEmail('');
    setPassword('');
    setfirstName('');
  };
  const clearRegistrationStatus = () => {
    setTimeout(() => {
      setregistrationStatus('');
    }, 5000);
  };

  useEffect(() => {
    if(user){
      navigate('/user-profile')
    }
    return () => {
      clearTimeout(clearRegistrationStatus);
    };
  }, []);

  return (
    <div className='form_container'>
      <h2>Register</h2>
      {registrationStatus && <p className='success-message'>{registrationStatus}</p>}
        <form onSubmit={handleSignup}>
          <div>
            <label>Username:</label>
            <input type="text" value={firstName}  onChange={(e) => setfirstName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Signup</button>
        </form>
        <div>Already have an account?<span> <NavLink to='/login'>Login</NavLink></span></div>
    </div>
  );
};

export default Signup;
