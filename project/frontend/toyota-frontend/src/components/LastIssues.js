import React, { useEffect, useState } from "react";
import { lastIssues } from "../api/apiCalls";

const LastIssues = () => {
  const [lastThreeIssues, setThreeLastIssues] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      lastIssues().then((response) => {
        setThreeLastIssues(response.data);
      });
    };
    fetchData();
    console.log(lastThreeIssues)
  }, []);

  const addStateColor = (id) =>
  id === 1
    ? "#ff0000"
    : id === 2
      ? "#FF9F00"
      : id === 3
        ? "#ffff00"
        : "#ff00fd";

  return (
    <div className ="card"  style={{backgroundColor: '#ddd', padding : 7}}>
      <h5><b>Last Issues :</b></h5>
      {lastThreeIssues.map((last, i) => (
        <div key={i}>{last.job_updated} --{">"} <b style={{color : addStateColor(last.state.state_id)}}> {last.server.country.app.app_shortcode} - {last.server.country.country_name} {last.server.server_name}</b> : Job{i+1}</div>
      ))}
    </div>
  );
};

export default LastIssues;
