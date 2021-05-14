import React, { useState, useEffect } from "react"
import {getCountries} from '../api/apiCalls'
import Server from './Server'

const Country = (props) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData =  async () => { 
      await getCountries().then(response => {setCountries(response.data)})
    };
    fetchData();
    console.log(countries)
  }, []);

  return (
    <div className="card-body p-md-0" >
      {countries.map((country) => props.apps === country.app.appID ? (
        <div className="float-left">
                <div className="country-component">{country.country_name}</div>
                <Server country={country.country_id}/>
        </div>
       ) : null
       )}
    </div>
  )
}

export default Country;