import { setUser, clearUser, setToken } from './authSlice';
import { useUserLoginMutation,useRegisterUserMutation, useGetUserDetailsQuery } from '../../app/services/auth/authServices';

// Login action
export const loginUser = (userData) => async (dispatch) => {
  try {
    // const {data} = await useUserLoginMutation(userData);

    console.log(userData,'|**|');

    // Assuming the API response includes token data
    const { userToken } = userData;
    console.log("user:",userData);
    console.log("token:",userToken);
    // console.log()

    // Set the user and token in the Redux state
    dispatch(setUser(userData));
    dispatch(setToken(userToken));
    // localStorage.setItem('token',userToken);

  } catch (error) {
    // Handle error
    console.log('Error occurred during login:', error);
  }
};

// Logout action
export const logoutUser = () => async (dispatch) => {
  try {
    // Clear the user data from the Redux state
    dispatch(clearUser());
    // localStorage.removeItem('token');
  } catch (error) {
    // Handle error
    console.log('Error occurred during logout:', error);
  }
};

// Get user details action
export const getUserDetails = () => async (dispatch) => {
  try {
    const { data } = await useGetUserDetailsQuery();

    // Assuming the API response includes the user data
    const { user } = data;

    // Set the user in the Redux state
    dispatch(setUser(user));
    // localStorage.getItem('token');
  } catch (error) {
    // Handle error
    console.log('Error occurred while fetching user details:', error);
  }
};
// Register action
export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await useRegisterUserMutation(userData);

    // Assuming the API response includes the user data
    const { user } = data;

    // Set the user in the Redux state
    dispatch(setUser(user));
  } catch (error) {
    // Handle error
    console.log('Error occurred during registration:', error);
  }
};

// Export all actions
export default {
  loginUser,
  registerUser,
  logoutUser,
  getUserDetails,
};























// import { useUserLoginMutation, useRegisterUserMutation } from '../../app/services/auth/authServices';

// export const useLoginUser = () => {
//   const [ userLoginMutation ] = useUserLoginMutation();

//   const loginUser = (userData) => {
//     userLoginMutation.mutate(userData);
    
//   };

//   return { loginUser, ...userLoginMutation };
// };

// export const useRegisterUser = () => {
//   const registerUserMutation = useRegisterUserMutation();

//   const registerUser = (userData) => {
//     registerUserMutation.mutate(userData);
//   };

//   return { registerUser, ...registerUserMutation };
// };
