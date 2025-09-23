import { useState, useEffect } from 'react';
import { getTownInCarpark } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotBusStopMapByTown from './PlotBusStopMapByTown.jsx'

const ViewBusStopByTown = () => {
    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");

    useEffect(() => {
        getTownInCarpark(setOptions);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotBusStopMapByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewBusStopByTown