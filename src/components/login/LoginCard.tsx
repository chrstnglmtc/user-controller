import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import SignLogo from '../../assets/react.svg';

const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Dispatch loginRequested action
    dispatch({ type: 'login/loginRequested', payload: { username, password } });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 h-96 bg-base-200 shadow-xl">
        <div className="card-body flex flex-col justify-center">
          <img className="w-24 mx-auto mb-4" src={SignLogo} alt="Sign Logo" />
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-primary" onClick={handleLogin}>
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;