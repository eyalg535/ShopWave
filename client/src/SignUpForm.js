import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    fetch("/signup", {
      method: "POST",
      headers:{
          'Content-Type':'application/json'
      },
      body: JSON.stringify()
  })
  .then(r => r.json())
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User name</label>
          <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
