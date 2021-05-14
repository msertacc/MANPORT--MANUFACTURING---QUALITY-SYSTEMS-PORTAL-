import React, { useState, useEffect, useCallback } from 'react'
import Accordion from './Accordion'
import axios from 'axios'
import { getApps, getCountries, getServers, getJobs } from '../api/apiCalls'

const Application = () => {

  const [jobs, setJobs] = useState([]);
  const [countries, setCountries] = useState([]);
  const [servers, setServers] = useState([]);
  const [apps, setApps] = useState([]);

  const fetchData = useCallback(async () => {
    const Jobs = await getJobs();
    const Servers = await getServers();
    const Countries = await getCountries();
    const Apps = await getApps();
    axios.all([Jobs, Servers, Countries, Apps]).then(
      axios.spread((...allData) => {
        const allJobs = allData[0].data;
        const allServers = allData[1].data;
        const allCountries = allData[2].data;
        const allApps = allData[3].data;
        setJobs(allJobs);
        setServers(allServers);
        setCountries(allCountries);
        setApps(allApps);
        //console.log(servers)
        console.log(jobs)
      })
    );
  }, []);

  useEffect(() => {
    fetchData();
    console.log(apps)
  }, [fetchData]);


  const addStateColor = (id) => id === 1 ? "#ff0000" : id === 2 ? "#FF9F00" : id === 3 ? "#ffff00" : "#00cc00"

  const maxColorServer = (job, server) => {
    let maxImpact = 5;
    job.map((data) => server.server_id === data.server.server_id ? (data.state.state_id <= maxImpact ? maxImpact = data.state.state_id : maxImpact) : null)
    return maxImpact;
  }

  const maxColorCountry = (job, country) => {
    let maxImpact = 4;
    job.map((data) => country.country_id === data.server.country.country_id ? (data.state.state_id <= maxImpact ? maxImpact = data.state.state_id : maxImpact) : null)
    return maxImpact;
  }

  const maxColorApp = (job, app) => {
    let maxImpact = 4;
    job.map((data) => app.appID === data.server.country.app.appID ? (data.state.state_id <= maxImpact ? maxImpact = data.state.state_id : maxImpact) : null)
    if (maxImpact === 1) {
      return "1px solid #ff0000"
    }
    else if (maxImpact === 2) {
      return "1px solid #FF9F00"
    }
    else if (maxImpact === 3) {
      return "1px solid #ffff00"
    }
    else {
      return "1px solid #00cc00"
    }
  }

  
  return (
    <div>
      {apps.map((app, id) => (
        <div >
          <Accordion border={maxColorApp(jobs, app)} key={id} title={<h5>{app.app_name}</h5>} content={
            <div >
              <div>
                {countries.map((country) => app.appID === country.app.appID ? (
                  <div style={{float :'left', border : '2px solid #000'}}>
                    <div className="country-component" style={{ backgroundColor: addStateColor(maxColorCountry(jobs, country))}}>{country.country_name}</div>
                    <div >
                      {servers.map((server) =>
                        country.country_id === server.country.country_id ? (
                          <>
                        <div style={{float : 'left'}} >
                          <div className="server-component" style={{ backgroundColor: addStateColor(maxColorServer(jobs, server)), float :'left'}}>
                              {server.server_name}
                          </div>
                        </div>
                        <div className="job-body" style={{border : '1px solid #000' }}>
                          {jobs.map((job, i) =>
                            job.server.server_id === server.server_id ? (
                              <div className="job-component" style={{ backgroundColor: addStateColor(job.state.state_id), float :'left' }}>
                                 Job
                              </div>
                                ) : null
                              )}
                            </div>
              </>
                        ) : null
                      )}
                    </div>
                  </div>
                ) : null
                )}
              </div>

            </div>
          }></Accordion>
        </div>
      ))}
    </div>
  )
}

export default Application;