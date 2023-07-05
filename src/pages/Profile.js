// import { useNavigate } from 'react-router-dom';
// import { useGetUserDetailsQuery } from '../app/services/auth/authServices';
// import Spinner from '../components/Spinner';
import '../styles/profile.css'
import Header from '../components/Header'
import { useSelector } from 'react-redux';


const Profile = () => {
  // const navigate = useNavigate();
  const {user}=useSelector(state=>state.auth)
  console.log(user,'ProfileCheck');
  // const { data: user, isLoading } = useGetUserDetailsQuery('userDetails', { retry: false });
  // console.log(user,'Profile Check');

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (!user) {
  //   navigate('/login');
  //   return null;
  // }

  return (
    <div >
      <Header/>
      <figure>{user.firstName.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{user.firstName}!</strong>
      </span>
    </div>
  );
};

export default Profile;
