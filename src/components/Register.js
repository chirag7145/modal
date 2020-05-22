import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Register = ({ getSuccess }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const onCross = () => {
    setPassword('');
    setUsername('');
    setEmail('');
  };

  const onRegister = (e) => {
    e.preventDefault();
    if (username !== '' && email !== '' && password !== '') {
      getSuccess();
    }
  };

  return (
    <div>
      <div
        className='modal'
        id='register'
        tabindex='-1'
        role='dialog'
        aria-labelledby='register'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Register</h5>
              <button
                onClick={onCross}
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onRegister}>
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
                  <label>Email</label>
                  <input
                    className='form-control'
                    type='email'
                    value={email}
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
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
                  <button class='btn btn-primary'>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  getSuccess: PropTypes.func.isRequired,
};

export default Register;
