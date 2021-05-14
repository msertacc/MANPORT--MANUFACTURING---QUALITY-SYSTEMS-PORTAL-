import http from "./http-common"

export const getApps = () => {
  return http.get("/management");
};

export const getByIdApps = id => {
  return http.get(`/management/${id}`);
};

export const getCountries = () => {
  return http.get("/countries");
};

export const getJobs = () => {
  return http.get("/job");
}

export const getServers = () => {
  return http.get("/servers")
}

export const deleteApp = id => {
  return http.delete(`/management/${id}`);
};

export const getBusinessAreas = () => {
  return http.get("/businessareas")
}

export const getResponsibleTeams = () => {
  return http.get("/responsibleteams")
}

export const createApp = app => {
  return http.post("/management/newapp",app,);
}

export const lastIssues = () => {
  return http.get("/lastissues")
}

export const updateApp = (id,data) => {
  return http.put(`/management/edit/${id}`,data)
}

export const countLiveCountry = id => {
  return http.get(`/liveappcountry/${id}`)
}

export const updateStopRisk = id => {
  return http.put(`management/updatestoprisk/${id}`)
}

export const updateAppShow = id => {
  return http.put(`management/updateappshow/${id}`)
}

export const login = creds => {
  return http.post('/auth', creds);
};

export const deletePlant = id => {
  return http.delete(`/deletecountry/${id}`)
}

export const countCountry = id => {
  return http.get(`/countcountry/${id}`)
}

export const updateJobStatus = id => {
  return http.put(`${id}`);
}

export const deleteJob = id => {
  return http.delete(`/job/${id}`);
};

export const troubleJobs = () => {  
  return http.get("/problematicjob")
}
