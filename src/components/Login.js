import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ getSuccess }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onCross = () => {
    setPassword('');
    setUsername('');
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      getSuccess();
    }
  };

  return (
    <div>
      <div className='modal' id='login'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Login</h5>
              <button className='close' data-dismiss='modal' onClick={onCross}>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onLogin}>
                <div className='form-group'>
                  <label>Username</label>
                  <input
                    className='form-control'
                    type='text'
                    value={username}
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                    className='form-control'
                    type='password'
                    value={password}
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <button className='btn btn-primary'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  getSuccess: PropTypes.func.isRequired,
};

export default Login;
