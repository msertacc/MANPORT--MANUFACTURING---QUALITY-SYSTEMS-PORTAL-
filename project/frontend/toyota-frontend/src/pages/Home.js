import React from "react";
import monitorPhoto from "../images/monitor.png";
import repairPhoto from "../images/repair.png";
import dangerPhoto from "../images/danger.png";
import linksPhoto from "../images/link.png";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoggedIn } = useSelector(store => ({ isLoggedIn: store.isLoggedIn }));

    return (
      <div className="text-center">
        {isLoggedIn && (

<div>

<h4 className="mb-5">
          <b>TOYOTA - Manufacturing & Quality Systems Portal</b>
        </h4>

        <Link to="/dashboard" style={{ color: "inherit" }}>
          <div style={{ marginRight: "50px", display: "inline-block" }}>
            <img width="250" src={monitorPhoto} alt="monitor" />
            <br />
            <h5> Monitoring Dashboard</h5>
          </div>
        </Link>
        <Link exact to="/management" style={{ color: "inherit" }}>
          <div style={{ marginRight: "50px", display: "inline-block" }}>
            <img width="250" src={repairPhoto} alt="repair" />
            <br />
            <h5> Application Management</h5>
          </div>
        </Link>
        <Link  to="/issues" style={{ color: "inherit" }}>
          <div style={{ marginRight: "50px", display: "inline-block" }}>
            <img width="250" src={dangerPhoto} alt="danger" />
            <br />
            <h5>Logged Issues</h5>
          </div>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <Link to="/links" style={{ color: "inherit" }}>
          <div className="text-center" style={{ display: "inline-block" }}>
            <img width="75" src={linksPhoto} alt="links" />
            <br />
            <h5>Quick Links</h5>
          </div>
        </Link>
  </div>


        )}

      </div>
    );

}

export default Home;
