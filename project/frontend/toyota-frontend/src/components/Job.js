import React, { useEffect, useState, useCallback } from "react";
import { getJobs } from "../api/apiCalls";

const Job = (props) => {
  const [jobs, setJobs] = useState([]);
  //const [maxColor, setmaxColor] = useState(0);

  const fetchData = useCallback(async () => {
    await getJobs().then((response) => {
      setJobs(response.data);
    });
  }, []);

  useEffect(() => {
    fetchData();
    console.log(jobs)
  }, [fetchData]);

  const addStateColor = (id) =>
    id === 1
      ? "#ff0000"
      : id === 2
      ? "#FF9F00"
      : id === 3
      ? "#ffff00"
      : "#ff00fd";

  // const maxItem = (app) => {
  //   app.map((data) =>
  //     data.state.state_id > maxColor
  //       ? setmaxColor(data.state.state_id)
  //       : maxColor
  //   );
  // };

  return (
    <div className="job-body">
      {jobs.map((job) =>
        job.server.server_id === props.server ? (
          <div
            className="job-component"
            style={{ backgroundColor: addStateColor(job.state.state_id) }}
          >
            Job
          </div>
        ) : null
      )}
    </div>
  );
};

export default Job;
