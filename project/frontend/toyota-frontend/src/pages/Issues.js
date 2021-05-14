import React, { useCallback, useMemo, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { troubleJobs, updateJobStatus, deleteJob } from '../api/apiCalls'
import VisibilityIcon from "@material-ui/icons/Visibility";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Switch from "@material-ui/core/Switch";
import DeleteModal from '../components/DeleteModal'
import IssuesTable from '../components/IssuesTable'
import { ColumnFilter } from '../components/ColumnFilter'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';


import SearchIcon from '@material-ui/icons/Search';
const Issues = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [currentJob, setCurrentJob] = useState("");
    const [jobID, setJobID] = useState(0);

    const [state, setState] = useState({
        description: null,
        plant: null,
        appname: null,
        date: null,
        issue: null,
        impact: null
    })


    const fetchData = useCallback(async () => {
        await troubleJobs().then((response) => setJobs(response.data))
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    const removeJob = async () => {
        await deleteJob(jobID);
        setModalVisible(false);
        fetchData();
    };

    const onClickCancel = () => {
        setModalVisible(false);
    };

    const columns = useMemo(() => [
        {
            Header: "Date",
            accessor: "job_updated",
            Filter: ColumnFilter,
        },
        {
            Header: "App Name",
            accessor: "server.country.app.app_name",
            Filter: ColumnFilter,
        },
        {
            Header: "Issue Type",
            accessor: "job_name",
            Filter: ColumnFilter,
        },
        {
            Header: "Impact",
            accessor: "state.state_id",
            Filter: ColumnFilter,
        },
        {
            Header: "Plant",
            accessor: "server.country.country_name",
            Filter: ColumnFilter,
        },
        {
            Header: "Description",
            accessor: "job_description",
            Filter: ColumnFilter,
        },
        {
            Header: "Actions",

            Cell: ({ row: { original } }) => {

                const changeStatus = async (id) => {
                    await updateJobStatus(id);
                    fetchData();
                };
                return (
                    <>
                        <Link
                            className="btn btn-manage-link btn-sm col-2"
                            to={{
                                pathname: `/job/${original.job_name}`,
                            }}
                        >
                            <VisibilityIcon></VisibilityIcon>
                        </Link>
                        <Link
                            to={{
                                pathname: `/job/${original.job_name}`,
                            }}
                            className="btn btn-manage-link btn-sm col-2"
                        >
                            <EditIcon></EditIcon>
                        </Link>
                        <button
                            onClick={() => {
                                setModalVisible(true);
                                setCurrentJob(original.job_name);
                                setJobID(original.job_id);
                            }}
                            className="btn btn-manage-link btn-sm col-3"
                        >
                            <DeleteIcon></DeleteIcon>
                        </button>
                        <Switch
                            onClick={() => changeStatus(original.job_id)}
                            checked={original.job_status}
                            className="col-3"
                        ></Switch>
                    </>
                )
            },
        },
    ],
        [fetchData]
    );

    const impactDeclare = (id) => {
        if (id === 1) {
            return 'High'
        }
        else if (id === 2) {
            return 'Medium'
        }
        else {
            return 'Low'
        }
    }

    const handleChange = e => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div className="container">
            <h2 style={{ font: "bold" }}>Issues</h2>
            <button className="btn btn-danger float-right">Search</button>
            <div>
            <Input style={{width :140, float :'left',marginLeft :5}}name="date" onChange={handleChange} placeholder="search" startAdornment={<InputAdornment position='end'><SearchIcon /></InputAdornment>}/>
            <Input style={{width :120, float :'left', marginLeft :15}}name="appname" onChange={handleChange} placeholder="search" startAdornment={<InputAdornment position='end'><SearchIcon /></InputAdornment>}/>
            <Input style={{width :125, float :'left', marginLeft :15}}name="issue" onChange={handleChange} placeholder="search" startAdornment={<InputAdornment position='end'><SearchIcon /></InputAdornment>}/>
            <Input style={{width :100, float :'left', marginLeft :15}}name="impact" onChange={handleChange} placeholder="search" startAdornment={<InputAdornment position='end'><SearchIcon /></InputAdornment>}/>
            <Input style={{width :85, float :'left', marginLeft :15}}name="plant" onChange={handleChange} placeholder="search" startAdornment={<InputAdornment position='end'><SearchIcon /></InputAdornment>}/>
            <Input style={{width :130, float :'left', marginLeft :15}}name="description" onChange={handleChange} placeholder="search" startAdornment={<InputAdornment position='end'><SearchIcon /></InputAdornment>}/>
            </div>
            <IssuesTable columns={columns} data={jobs.filter((item) =>
                (state.description === null ? item.job_description : (item.job_description.toLowerCase().includes(state.description.toLowerCase())))
                && (state.plant === null ? item.server.country.country_name : (item.server.country.country_name.toLowerCase().includes(state.plant.toLowerCase())))
                && (state.appname === null ? item.server.country.app.app_name : (item.server.country.app.app_name.toLowerCase().includes(state.appname.toLowerCase())))
                && (state.date === null ? item.job_updated : (item.job_updated.toLowerCase().includes(state.date.toLowerCase())))
                && (state.issue === null ? item.job_name : (item.job_name.toLowerCase().includes(state.issue.toLowerCase())))
                && (state.impact === null ? item.state.state_id : (impactDeclare(item.state.state_id).toLowerCase().includes(state.impact.toString().toLowerCase())))
            )} />
            <DeleteModal
                message={<strong>{currentJob}</strong>}
                variety="job"
                onClickCancel={onClickCancel}
                onClickOk={removeJob}
                visible={modalVisible}
            />
        </div>
    )
}

export default Issues;
