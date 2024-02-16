import React from 'react';
import '../Styles/Login.css'

function Login({ onLogin }) {
  return (
    <div className="heroo">
        <div className='login'>
            <h1>Login</h1>
            <br />
            <button onClick={onLogin}> 💻 Login with Google</button>
        </div>
    </div>
    
  );
}

export default Login;
