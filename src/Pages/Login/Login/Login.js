import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState(null);
  const { signIn, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(null);
        // navigate("/");
        if (user.emailVerified) {
          navigate(from, {replace:true});
        }
        else {
          toast.error('Your email is not verified, please verify your email')
        }
      })
      .catch((e) => {
        // const errorMessage = error.message;
        console.error(e);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button className="me-4" variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Login;
