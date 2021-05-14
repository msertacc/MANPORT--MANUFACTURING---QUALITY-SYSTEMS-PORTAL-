import Application from '../components/Application'
import React from "react";
import LastIssues from '../components/LastIssues'

const Dashboard = () => {
  return (
    <div style={{ margin: 25 }}>
      <div>
        <h1 style={{ float: 'left' }}>Dashboard</h1>
      </div>
      <div style={{ display: 'grid', justifyItems: 'end' }}>
        <LastIssues />
      </div>
      <div>
        <Application />
      </div>
    </div>
  );
};

export default Dashboard;
