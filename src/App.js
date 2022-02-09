import React, {useState} from 'react';
import AvailabeFleets from './AvailabeFleets'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {

  // searchTerm - takes imput value from user
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App container">

      {/* Heading */}
      <h3 className="main-heading">
        <strong className="main-heading-strong" >Available Services</strong>
      </h3>
      <div className="user-input form-group input-group has-search">

        {/* User Input */}
        <input 
          type="text" 
          className="input-text form-control" 
          placeholder="Search for a specific service" 
          onChange={e => setSearchTerm(e.target.value)}
        />

        <div className="input-group-append">
          <span className="fa fa-search fa-lg form-control-feedback"></span>
        </div>
      </div>

      {/* All Availabe Fleets */}
      <AvailabeFleets 
        searchTerm={searchTerm}
      />

    </div>
  );
}

export default App;
