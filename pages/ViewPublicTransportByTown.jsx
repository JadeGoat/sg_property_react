import { useState, useEffect } from 'react';
import { getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotPublicTransportMapByTown from './PlotPublicTransportMapByTown.jsx'
import PlotPublicTransportMapByRadius from './PlotPublicTransportMapByRadius.jsx'

const ViewPublicTransportByTown = () => {
    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");

    useEffect(() => {
        getTownInPlanningArea(setOptions);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotPublicTransportMapByRadius town={selectedTown} />
            <PlotPublicTransportMapByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewPublicTransportByTown