import { useState, useEffect } from 'react';
import { getSupermarketsData, getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotRetailServicesMapByRadius from './PlotRetailServicesMapByRadius.jsx'

const ViewRetailServicesByTown = () => {
    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");
    const [supermarketsData, setSupermarketsData] = useState(null);

    useEffect(() => {
        getTownInPlanningArea(setOptions);
        getSupermarketsData(setSupermarketsData);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotRetailServicesMapByRadius town={selectedTown} supermarketsData={supermarketsData} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewRetailServicesByTown