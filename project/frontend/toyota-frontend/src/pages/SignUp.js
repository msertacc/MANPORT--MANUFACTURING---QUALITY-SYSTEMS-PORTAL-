import React from "react";
import Input from "../components/Input";
import Logo from "../images/logotoyota.png";





const SignUp = (props) => {

    //const [username, setUsername] = useState();
    //const [password, setPassword] = useState();
    //const [error, setError] = useState();
/*
    const onClickLogin = async event => {
        event.preventDefault();
        const creds = {
          username,
          password
        };
    
        const { history } = props;
        const { push } = history;
    
        setError(undefined);
        try {
          //await dispatch(loginHandler(creds));
          push('/');
        } catch (apiError) {
          setError(apiError.response.data.message);
        }
      };
*/
  return (
    <div className="container mt-5">
      <form>
        <div className="text-center">
          <img src={Logo} alt="Toyota Logo" width="150" />
          <h1 className="mt-3">Signup</h1>
        </div>
        <Input label="Username" />
        <Input label="Person No"/>
        <Input label="Role ddd" />
        <Input label="Password" />
        <Input label="Password Repeat" />

        
        <div className=" text-center">
          <button className="btn btn-danger btn-lg">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;