import React from 'react'
import useFetch from "./useFetch";
import FleetDetails from './FleetDetails'

export default function Fleets({fleetName}) {

  // Get all data from target fleetName 
  const { error, isPending, data } = useFetch(`http://localhost:8000/data?name=${fleetName}`)

  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div></div> }
      { data && <FleetDetails data={data}/> }
    </div>
  )
}

