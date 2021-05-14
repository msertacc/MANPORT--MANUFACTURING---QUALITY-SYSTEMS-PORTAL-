import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { getJobs, getServers } from "../api/apiCalls";
import Job from "./Job";

const Server = (props) => {
  const [servers, setServers] = useState([]);
  const [jobs, setJobs] = useState([]);

  const fetchData = useCallback(async () => {
    const Jobs = await getJobs();
    const Servers = await getServers();
    axios.all([Jobs, Servers]).then(
      axios.spread((...allData) => {
        const allJobs = allData[0].data;
        const allServers = allData[1].data;
        setJobs(allJobs);
        setServers(allServers);
        console.log(jobs);
        console.log(servers)
      })
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {servers.map((server) =>
        props.country === server.country.country_id ? (
          <div>
            <div className="server-component">{server.server_name}</div>
            <Job server={server.server_id} />
          </div>
        ) : null
      )}
    </div>
  );
};

export default Server;
