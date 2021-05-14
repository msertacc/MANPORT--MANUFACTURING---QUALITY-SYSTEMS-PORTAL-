import React, { useState, useEffect, useCallback, useMemo } from "react";
import ManagementTable from '../components/ManagementTable'
import {
  getApps,
  updateStopRisk,
  countLiveCountry,
  updateAppShow,
  deleteApp,
} from "../api/apiCalls";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Switch from "@material-ui/core/Switch";
import DeleteModal from "../components/DeleteModal";
import { Link } from "react-router-dom";

const Management = () => {
  const [apps, setApps] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentApp, setCurrentApp] = useState("");
  const [appID, setAppID] = useState(0);

  const fetchData = useCallback(async () => {
    const { data: appsResponse } = await getApps();
    const countLiveCountries = await fetchLiveCountriesForApps(appsResponse);
    setApps(
      appsResponse.map((app, idx) => ({
        ...app,
        countLiveCountry: countLiveCountries[idx],
      }))
    );

  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchLiveCountriesForApps = async (appwLive) => {
    const countLiveCountries = await Promise.all(
      appwLive.map((app) => countLiveCountry(app.appID))
    );
    return countLiveCountries.map(({ data: liveCountries }) => liveCountries);
  };

  const removeApp = async () => {
    await deleteApp(appID);
    setModalVisible(false);
    fetchData();
  };

  const onClickCancel = () => {
    setModalVisible(false);
  };

  const columns = useMemo(() => [
    {
      Header: "Application Name",
      accessor: "app_name",
    },
    {
      Header: "Business Area",
      accessor: "businessarea.businessarea_name",
    },
    {
      Header: "Live Plants",
      accessor: "countLiveCountry",
    },
    {
      Header: "Line Stop Risk",
      accessor: "app_stoprisk",
      Cell: ({ row: { original } }) => {

        const changeCheck = async (id) => {
          await updateStopRisk(id);
          fetchData();
        };
        return (
          <input
            checked={original.app_stoprisk}
            onClick={() => {
              changeCheck(original.appID);
            }}
            id="appStopRisk"
            type="checkbox"
            style={{ width: 18, height: 18, marginTop: 5 }}
          />
        )
      },
      sortType: (a, b, id) => {
        if (a.original[id] > b.original[id]) return -1;
        if (b.original[id] > a.original[id]) return 1;
      },
    },
    {
      Header: "Actions",
      Cell: ({ row: { original } }) => {
        const changeTrack = async (id) => {
          await updateAppShow(id);
          fetchData();
        };
        return (
          <>
            <Link
              className="btn btn-manage-link btn-sm col-2"
              to={{
                pathname: `/management/${original.app_name}`,
                mode: "view",
                id: original.appID
              }}
            >
              <VisibilityIcon></VisibilityIcon>
            </Link>
            <Link
              to={{
                pathname: `/management/${original.app_name}`,
                mode: "edit",
                id: original.appID
              }}
              className="btn btn-manage-link btn-sm col-2"
            >
              <EditIcon></EditIcon>
            </Link>
            <button
              onClick={() => {
                setModalVisible(true);
                setCurrentApp(original.app_name);
                setAppID(original.appID);
              }}
              className="btn btn-manage-link btn-sm col-3"
            >
              <DeleteIcon></DeleteIcon>
            </button>
            <Switch
              onClick={() => changeTrack(original.appID)}
              checked={original.app_show}
              className="col-3"
            ></Switch>
          </>
        )
      },
    },
  ],
    [fetchData]
  );

  return (
    <div className="container">
      <h2 style={{ float: "left", font: "bold" }}>Management</h2>
      <div style={{ float: "right" }}>
        <Link className="btn btn-danger btn-sm" to={{ pathname: "/management/add", mode: "add" }}>
          Add New App
          </Link>
        <Link className="btn btn-danger btn-sm ml-3" exact to="/management/plants">
          Plant Management
          </Link>
      </div>
      <ManagementTable columns={columns} data={apps} />
      <DeleteModal
        message={<strong>{currentApp}</strong>}
        variety="app"
        onClickCancel={onClickCancel}
        onClickOk={removeApp}
        visible={modalVisible}
      />
    </div>
  );
};

export default Management;
