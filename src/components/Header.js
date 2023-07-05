import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useGetUserDetailsQuery } from '../app/services/auth/authServices';
import { clearUser, setToken, setUser } from '../features/auth/authSlice';
import '../styles/header.css';
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // // Automatically authenticate user if token is found
  // const { data, isFetching } = useGetUserDetailsQuery(undefined, {
  //   refetchOnMountOrArgChange: true,
  // });

  // useEffect(() => {
  //   if (data) dispatch(setUser(data));
  //   console.log(data); // user object
  // }, [data, dispatch]);

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(setToken(null)); // Clear the token
  };

  return (
    <header>
      <div className='header-status'>
        <span>
         { user? `Logged in as ${user.email}`
            : "You're not logged in"}
        </span>
        
        <div className='cta'>
          {user ? (
            <button className='logout-button'
               onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
      <nav className='container navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/user-profile'>Profile</NavLink>
      </nav>
    </header>
  );
};

export default Header;
