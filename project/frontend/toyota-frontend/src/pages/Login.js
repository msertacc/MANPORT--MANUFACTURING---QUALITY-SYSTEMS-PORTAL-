import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import { useDispatch } from 'react-redux';
import Logo from "../images/logotoyota.png";
import { loginHandler } from '../redux/authActions';

const Login = (props) => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setError(undefined);
  }, [username, password]);

  const onClickLogin = async event => {
    event.preventDefault();
    const creds = {
      username,
      password
    };
    setError(undefined);
    setLoading(true)
    await wait();
    try {
      await dispatch(loginHandler(creds));
      props.history.push('/');

    } catch (apiError) {
      if (apiError.response) {
        setError(apiError.response.data.message)
      }
      else {
        setError("Error connecting to server")
      }
    }
    setLoading(false)
  };

  const buttonEnabled = username && password;

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 1000) => {
    await sleep(milliseconds);
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="text-center">
          <img src={Logo} alt="Toyota Logo" width="150" />
          <h1 className="mt-3">Login</h1>
        </div>
        <Input label="Username" onChange={event => setUsername(event.target.value)} />
        <Input label="Password" type="password" onChange={event => setPassword(event.target.value)} />
        {error && <div className="alert alert-danger">{error}</div>}
        <div className=" text-center">
          <button onClick={onClickLogin} disabled={!buttonEnabled} className="btn btn-danger">
            {loading && <span className="spinner-border spinner-border-sm"></span>}Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
