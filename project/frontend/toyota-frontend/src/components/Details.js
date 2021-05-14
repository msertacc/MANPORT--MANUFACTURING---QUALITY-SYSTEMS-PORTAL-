import React, { useState, useEffect } from "react";
import axios from "axios";
import { getResponsibleTeams, getBusinessAreas } from "../api/apiCalls";
import '../styles/general.css'
const Details = (props) => {
  const [rTeams, setrTeams] = useState([]);
  const [bAreas, setbAreas] = useState([]);

  const { data, mode } = props;

  useEffect(() => {
    async function fetchData() {
      const getrTeams = await getResponsibleTeams();
      const getbAreas = await getBusinessAreas();
      axios.all([getrTeams, getbAreas]).then(
        axios.spread((...allData) => {
          const allrTeams = allData[0].data;
          const allbAreas = allData[1].data;
          setrTeams(allrTeams);
          setbAreas(allbAreas);
        })
      );
    }
    fetchData();
  }, []);

  return (
    <div
      className={mode === 'view' ? 'disabled' : null}
      style={{
        float: "left",
        width: 1350,
        height: 340,
      }}
    >
      <div
        style={{
          float: "left",
          width: 580,
          height: 330,
        }}
      >
        <div className="form-group " >
          <label style={{ float: "left" }} htmlFor="appShortCode">
            Shortcode :
          </label>
          <input
            id="appShortCode"
            type=""
            className="form-control"
            required
            placeholder={data ? data.app_shortcode: null }
            // onChange={handleInputChange}
            name="app_shortcode"
            style={{ width: 200, marginLeft: 150 }}
          />
        </div>

        <div className="form-group">
          <label style={{ float: "left" }} htmlFor="appShortCode">
            Release Date :{" "}
          </label>
          <input
            id="appShortCode"
            type=""
            className="form-control"
            required
            placeholder={data ? data.app_date : null}
            //onChange={handleInputChange}
            name="appShortCode"
            style={{ width: 200, marginLeft: 150 }}
          />
        </div>

        <div className="form-group">
          <label style={{ float: "left" }} htmlFor="appShortCode">
            Responsible :{" "}
          </label>
          <input
            id="appShortCode"
            type=""
            className="form-control"
            required
            placeholder={data ? data.responsibleteam.person.person_name : null}
            //onChange={handleInputChange}
            name="appShortCode"
            style={{ width: 400, marginLeft: 150 }}
          />
        </div>
        <div className="form-group">
          <label style={{ float: "left" }} htmlFor="appFullName">
            Backend:{" "}
          </label>
          <input
            id="appFullName"
            type="text"
            class="form-control"
            placeholder={data ? data.backend.backend_name : null }
            //onChange={handleInputChange}
            name="appShortCode"
            style={{ width: 400, marginLeft: 150 }}
          />
        </div>
        <div className="form-group">
          <label style={{ float: "left" }} htmlFor="appFullName">
            Frontend:{" "}
          </label>
          <input
            id="appFullName"
            type="text"
            class="form-control"
            placeholder={data ? data.frontend.frontend_name : null}
            //onChange={handleInputChange}
            name="appShortCode"
            style={{ width: 400, marginLeft: 150 }}
          />
        </div>
        <div className="form-group">
          <label style={{ float: "left" }} htmlFor="appFullName">
            Database:
          </label>
          <input
            id="appFullName"
            type="text"
            class="form-control"
            placeholder={data ? data.database.database_name: null}
            //onChange={handleInputChange}
            name="appShortCode"
            style={{ width: 400, marginLeft: 150 }}
          />
        </div>
      </div>
      <div
        style={{
          float: "left",
          width: 580,
          marginLeft: 180,
        }}
      >
        <div className="form-group">
          <label style={{ float: "left" }} htmlFor="appShortCode">
            Full Name:
          </label>
          <input
            id="appFullName"
            type="text"
            className="form-control"
            required
            placeholder={data ? data.app_fullname : null}
            // onChange={handleInputChange}
            name="appFullName"
            style={{ width: 400, marginLeft: 150 }}
          />
        </div>

        <div className="form-group select-container">
          <label style={{ float: "left" }} htmlFor="bArea">
            Business Area:
          </label>
          <select
            //value={app.businessarea_id}
            //onChange={handleInputChange}
            className="custom-select"
            name="businessarea_id"
            id="bArea"
            style={{ width: 400, marginLeft: 50 }}
          >
            {mode === 'view' ? (
              <option selected hidden>
                {data ? data.businessarea.businessarea_name : null}
              </option>
            ) : (<option disabled selected hidden>
              Choose Area...
            </option>)}

            {bAreas.map((option) => (
              <option value={option.businessarea_id}>
                {option.businessarea_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group select-container">
          <label style={{ float: "left" }} htmlFor="rTeasm">
            Responsible Team:
          </label>
          <select
            //value={app.responsibleteam_id}
            //onChange={handleInputChange}
            class="custom-select"
            name="responsibleteam_id"
            id="rTeasm"
            style={{ width: 400, marginLeft: 22 }}
          >
            {mode === 'view'  ? (
              <option selected hidden>
                {data ? data.responsibleteam.responsibleteam_name : null}
              </option>
            ) : (<option disabled selected hidden>
              Choose Team...
            </option>)}
            {rTeams.map((option) => (
              <option value={option.responsibleteam_id}>
                {option.responsibleteam_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label style={{ float: "left" }} htmlFor="lCountBackend">
            Line Count Of Backend Code:
          </label>
          <input
            id="lCountBackend"
            type="text"
            className="form-control"
            required
            value={"35k>"}
            disabled
            //onChange={handleInputChange}
            name="appFullName"
            style={{ width: 200, marginLeft: 348 }}
          />
        </div>
        <div className="form-group">
          <label style={{ float: "left" }} htmlFor="lCountBackend">
            Line Count Of Frontend Code:
          </label>
          <input
            id="lCountBackend"
            type="text"
            className="form-control"
            required
            disabled
            value={"70k<"}
            //onChange={handleInputChange}
            name="appFullName"
            style={{ width: 200, marginLeft: 348 }}
          />
        </div>
        <div className="form-group">
          <input
            id="appStopRisk"
            type="checkbox"
            required
            checked = {data ? data.app_stoprisk : null}
            //value={app.appStopRisk}
            //onChange={handleInputChange}
            name="appStopRisk"
            style={{ marginRight: 10, float: "left" }}
          />
          <label className="float-left" htmlFor="appStopRisk">
            Line Stop Risk (active critical issue alarms)
          </label>
        </div>
        <button
          style={{ marginLeft: 170 }}
          //onClick={saveApp}
          className="btn btn-primary"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default Details;
