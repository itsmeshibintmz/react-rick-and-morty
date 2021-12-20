import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetcedhData] = useState([]);
  let {info, results} = fetchedData
  
  console.log(results);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  
  useEffect(() => {

    (async function (){
      let data = await fetch(api).then(res=>res.json());
      updateFetcedhData(data)
    })()

  }, [api])
  
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
