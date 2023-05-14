import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          address,
          email,
        }),
      });
      if (res.ok) {
        const user = await res.json();
        setUser(user);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col>
        <div>
      <form onSubmit={handleSubmit} >
      <div className=" auth-wrapper auth-inner row-">
        <h1 className="text-center">
          Sign Up <i className="fas fa-home fa-sm"> </i>
        </h1>
        <div className="form-group col-md-9">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group col-md-9">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div className="form-group col-md-9">
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            className="form-control"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div className="form-group col-md-9">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group col-md-9">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <input type="submit" /> */}
        <br />
        <button input="submit" className="btn btn-primary">
          Register
        </button>
        </div>
      </form>
    </div>
    </Col>
    </Row>
    </Container>
  );
}