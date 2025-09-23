import { useState, useEffect } from 'react';
import { getTownInCarpark } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotBusStopMapByRadius from './PlotBusStopMapByRadius.jsx'

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
            <PlotBusStopMapByRadius town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewBusStopByTown