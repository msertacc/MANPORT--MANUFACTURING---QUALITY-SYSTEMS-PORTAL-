import React, { useState, useEffect } from "react";
import Accordion from "../components/Accordion";
import Details from '../components/Details'
import {
  getByIdApps,
} from "../api/apiCalls";

const ApplicationManagement = (props) => {

  const [appById, setAppById] = useState(null);
  const [selectOption, setSelectOption] = useState(null)

  useEffect(() => {
    getMode();
    getData();
    //console.log(props)
  }, [])

  const getData = async () => {
    if (props.location.id) {
      await getByIdApps(props.location.id).then((response) => setAppById(response.data))
      //console.log(appById)

      //console.log(props)
    }
    console.log(props)
  }

  const getMode = () => props.location.mode ? setSelectOption(props.location.mode) : null

  const handleOptionChange = (event) => {
    setSelectOption(event.target.value)
  }

  return (
    <>
      <div style={{ margin: 20 }}>
        {appById &&  (
        <h4>
          {appById.app_shortcode} - {appById.app_fullname} - {selectOption && <h4 >{selectOption} Mode  </h4>}
        </h4>) 
        } 

        <div className="float-right mb-auto">
          <label><input type="radio" value="view" checked={selectOption === 'view'} onChange={handleOptionChange} />View</label>
          <label> <input type="radio" value="add" checked={selectOption === 'add'} onChange={handleOptionChange} />Add</label>
          <label> <input type="radio" value="edit" checked={selectOption === 'edit'} onChange={handleOptionChange} />Edit</label>
        </div>
        <br></br>
        
          <div style={{ marginLeft: 50, marginRight: 50 }} >
            {((appById && selectOption) || (selectOption === 'add')) ?(
            <Accordion
              title={
                <div style={{ width: 1350 }}>
                  <h3>Details</h3>
                  <hr style={{ backgroundColor: "#aaa" }}></hr>
                </div>
              }
              content={
                <Details mode ={selectOption} data = {appById}></Details>
              }
            />) : null}
            <Accordion title={
              <div style={{ width: 1350 }}>
                <h3>Links</h3>
                <hr style={{ backgroundColor: "#aaa" }}></hr>
              </div>
            }></Accordion>
            <Accordion title={
              <div style={{ width: 1350 }}>
                <h3>Factory Management</h3>
                <hr style={{ backgroundColor: "#aaa" }}></hr>
              </div>
            }></Accordion>
            <Accordion title={
              <div style={{ width: 1350 }}>
                <h3>Issues Management</h3>
                <hr style={{ backgroundColor: "#aaa" }}></hr>
              </div>
            }></Accordion>
            <Accordion title={
              <div style={{ width: 1350 }}>
                <h3>Middleware Management</h3>
                <hr style={{ backgroundColor: "#aaa" }}></hr>
              </div>
            }></Accordion>
          </div>) 
          
          {selectOption === 'add'  ? (
            <div>
              Add Mode
            </div>
          ) : selectOption === 'view' ?  (<div>View Mode</div>) : (<div>eidt</div>)}
      </div>
    </>
  );
};

export default ApplicationManagement;
