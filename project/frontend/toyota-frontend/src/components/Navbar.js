import React from "react";
import logo from '../images/logotoyota.png'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../redux/authActions'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
const Navbar = () => {

  const { isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn,
    //username: store.username,
    //displayName: store.displayName,
    //image: store.image
  }));

  const dispatch = useDispatch();
  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
  };

  const LoginLinks = (

    <ul className="navbar-nav mr-auto">
      <Link exact to="/" className="nav-link">
        Home
            </Link>
      <Link to="/dashboard" className="nav-link">
        Dashboard
            </Link>
      <Link to="/management" className="nav-link">
        Management
            </Link>
      <Link to="/issues" className="nav-link">
        Issues
            </Link>
      <Link to="/links" className="nav-link">
        Links
            </Link>
    </ul>
  )

  const LogoutLinks = (
    <ul className="navbar-nav">
      <Link className="nav-link" to="/login">
        <PersonIcon></PersonIcon> Login
            </Link>
      <Link className="nav-link" to="/signup">
        <PersonAddIcon />Signup
            </Link></ul>
  )


  return (
    <div className="shadow-sm bg-light mb-3" style={{zIndex : 50}}>
      <nav class="navbar navbar-light navbar-expand-lg">
        <Link className="navbar-brand" exact to="/"><img src={logo} width="70" alt="Toyota Logo" />Manport</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {isLoggedIn ? LoginLinks : <ul className="navbar-nav mr-auto"></ul>}
          <div class="form-inline my-2 my-lg-0">
            {isLoggedIn ? (<ul className="navbar-nav"><Link to="/login" className="nav-link" onClick={onLogoutSuccess} >
              <PowerSettingsNewIcon style={{ width: 22, marginRight: 8, marginBottom: 1 }}></PowerSettingsNewIcon>
              Logout
            </Link>
            </ul>) : LogoutLinks}
          </div>
        </div>
      </nav>
    </div>
  );

}

export default Navbar;