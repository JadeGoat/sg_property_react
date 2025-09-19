import { useState, useEffect } from 'react';
import { getTownInResale } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotAvgResalePriceLineChart from './PlotAvgResalePriceLineChart'

const ViewResaleByTown = () => {

    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");

    useEffect(() => {
        getTownInResale(setOptions);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotAvgResalePriceLineChart town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewResaleByTown