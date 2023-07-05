import React, { useState,useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
// import { useLoginUser } from '../features/auth/authActions';
import { useUserLoginMutation } from '../app/services/auth/authServices';
import { loginUser } from '../features/auth/authActions';
import { NavLink } from 'react-router-dom';


const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const{isLoggedIn}=useSelector(state=>state.auth)
  console.log(isLoggedIn,'//check//');
  useEffect(()=>{
    if(isLoggedIn){
      navigate('/user-profile');
    }
  },[isLoggedIn,navigate])

  const [ userLoginMutation ] = useUserLoginMutation();

  // const { loginUser, isLoading, isError } = useLoginUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(()=>{
  //   dispatch(userLoginMutation);
  // },[dispatch])

  const handleLogin = (e) => {
    e.preventDefault();

    // dispatch(loginUser(email,password));
    // Call the loginUser mutation
    userLoginMutation({ email, password })
    .unwrap()
    .then((data)=>{
      console.log("Login:::",data);
      dispatch(loginUser(data));
    })
    .catch((err)=>console.log(err))

    

    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div className='form_container'>
      <h2>Login</h2>
      
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div>Don't have an account?<span> <NavLink to='/register'>Register</NavLink></span></div>
    </div>
  );
};

export default Login;
