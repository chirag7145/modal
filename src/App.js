import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  const [success, setSuccess] = useState(false);

  const getSuccess = () => {
    setSuccess(true);
  };

  return (
    <div className='container mt-5'>
      {success && <h1 className='text-center text-success'>Success !!</h1>}
      {!success && (
        <div>
          {' '}
          <Card />
          <Login getSuccess={getSuccess} />
          <Register getSuccess={getSuccess} />
        </div>
      )}
    </div>
  );
}

export default App;
