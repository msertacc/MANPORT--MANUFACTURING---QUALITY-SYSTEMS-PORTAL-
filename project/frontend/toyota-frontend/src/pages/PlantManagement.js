import React, { useState, useEffect, useCallback, useMemo } from "react";
import {Link} from 'react-router-dom'
import { getCountries, deletePlant, countCountry } from "../api/apiCalls";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteModal from '../components/DeleteModal'
import PlantTable from '../components/PlantTable'

const PlantManagement = () => {

  const [countries, setCountries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const [countryId, setCountryId] = useState(0);
 
  const fetchData = useCallback( async () => {
    const { data: countryResponse } = await getCountries(); 
    const countLiveCountries = await fetchCountCountries(countryResponse)
    console.log(countLiveCountries)
     setCountries(
        countryResponse.map((country, idx) => ({
        ...country,
        countCountry : countLiveCountries[idx],
      }))
     )
  },[])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchCountCountries = async (country) => {
    console.log(country)
    const countLiveCountries = await Promise.all(
      country.map((data) => countCountry(data.country_id))
    );
    return countLiveCountries.map(({ data: countCountries }) => countCountries);
  };

  const removeApp = async () => {
    
    await deletePlant(countryId);
    setModalVisible(false);
    fetchData();
  };

  const onClickCancel = () => {
    setModalVisible(false);
  };

  const columns = useMemo(() => [
    {
      Header: "Country",
      accessor: "country_name",
    },
    {
      Header: "Short Code",
      accessor: "country_shortcode",
    },
    {
      Header: "Full Name",
      accessor: "country_fullname",
    },
    {
      Header: "Live App Count",
      accessor: "countCountry",
    },
    {
      Header: "Actions",
      Cell: ({ row: { original } }) => {
        
        return (
          <>
            <button
              onClick={() => {
                setModalVisible(true);
                setCurrentCountry(original.country_name);
                setCountryId(original.country_id);
              }}
              className="btn btn-manage-link btn-sm col-3"
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </>
        )
      },
    },
  ],
    [fetchData]
  );

  
  return (
    <div className="container">
      <h3 style={{ float: "left", font: "bold" }}>Plant Management</h3>
      <PlantTable columns={columns} data={countries} />
      <div   className="text-center">
      <Link className ="btn btn-danger btn-sm" to = "/management/plants/newplant">Add New Plant</Link>
      </div>

      <DeleteModal
      
          message={<strong>{currentCountry}</strong>}
          variety = "plant"
          onClickCancel={onClickCancel}
          onClickOk={removeApp}
          visible={modalVisible}
        />
    </div>
  );
};

export default PlantManagement;
