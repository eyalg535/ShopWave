import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Error, Input, FormField, Label, Textarea } from "./styles";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
        navigate('/');
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete='current-password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <FormField>
          {errors && Array.isArray(errors) && errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginForm;
