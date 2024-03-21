import { combineReducers } from '@reduxjs/toolkit';
import { loginWorker } from '../saga/loginSaga'; // Import your login worker saga

const rootReducer = combineReducers({
  login: loginWorker,
  // Add more reducers as needed
});

export default rootReducer;
