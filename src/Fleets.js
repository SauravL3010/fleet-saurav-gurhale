import React from 'react'
import useFetch from "./useFetch";
import FleetDetails from './FleetDetails'

export default function Fleets({fleetName}) {

  // Get all data from target fleetName 
  const { error, isPending, data } = useFetch(`https://my-json-server.typicode.com/SauravL3010/fleet-saurav-gurhale/data?name=${fleetName}`)

  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div></div> }
      { data && <FleetDetails data={data}/> }
    </div>
  )
}

