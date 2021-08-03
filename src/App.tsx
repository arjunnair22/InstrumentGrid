import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstrumentTable from "./features/instrumentTable";

function App() {
  return (
      <div className={"container"}>
          <div className={"row table-app"} >
              <InstrumentTable/>
          </div>
      </div>
  );
}

export default App;
