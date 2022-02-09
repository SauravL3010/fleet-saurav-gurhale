import React from 'react';
import Fleets from './Fleets'
import useFetch from "./useFetch";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



export default function AvailabeFleets({searchTerm}) {

  const { error, isPending, data: fleets } = useFetch(`https://my-json-server.typicode.com/SauravL3010/fleet-saurav-gurhale/data?q=${searchTerm}`)

  // Create a set of all the availabe fleets, removing duplicates
  const fleetSet = new Set();
  if (fleets){
    fleets.forEach(fleet => {
      fleetSet.add(fleet.name)
    })
  }

  return (

    <div className="row row-cols-1 row-cols-md-3 g-4">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { fleets && Array.from(fleetSet).map(fleetName => {
        return (<Fleets fleetName={fleetName} key={fleetName} />)
      })}
    </div>

  );
}
