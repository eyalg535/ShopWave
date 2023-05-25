import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Error, Input, FormField, Label } from "../styles";

export default function Login({ setUser, setCarts }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Clear the cart data when a new user logs in
    setCarts(null);
  }, [setCarts]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
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
          setUser(user)
          navigate('/')
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <div className=" auth-wrapper auth-inner row-">
            <form onSubmit={handleSubmit} >
              <h1 >
                Login <i className="fas fa-home fa-sm"> </i>
              </h1>
              <div className="form-group col-md-9">
                <label htmlFor="username">Username </label>
                <input
                  className="form-control"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="form-group col-md-9">
                <label htmlFor="exampleInputPassword1">Password </label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <br />
              <button input="submit" className="btn btn-primary">
                {isLoading ? "Loading..." : "Login"}</button>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
              <div className="mt-3">
                Don't have an account? <Link to="/signup">Sign up</Link> now.
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}