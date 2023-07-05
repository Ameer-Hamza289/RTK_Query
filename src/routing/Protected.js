// import { useGetUserDetailsQuery } from '../app/services/auth/authServices';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = () => {
  // const { data: isLoggedIn, isFetching } = useGetUserDetailsQuery('userDetails', {
  //   pollingInterval: 900000, // Refetch every 15 minutes
  // });
const {isLoggedIn}=useSelector(state=>state.auth)
  // if (isFetching) {
  //   return <div>Loading...</div>;
  // }

  if (!isLoggedIn) {
    return (
      <div className='home_page'>
        <h1>Unauthorized :|</h1>
        <span>
          <NavLink to='/login'>Login</NavLink><span style={{color:"white"}}> to gain access</span>
        </span>
        <span><span style={{color:"white"}}>Not Registered? </span> <NavLink to='/register'>Register</NavLink></span>
      </div>
    );
  }

  return <Outlet />; // Returns child route elements
};

export default Protected;
