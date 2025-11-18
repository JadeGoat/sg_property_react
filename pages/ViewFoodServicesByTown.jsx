import { useState, useEffect } from 'react';
import { getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotFoodServicesMapByTown  from './PlotFoodServicesMapByTown.jsx'
import PlotFoodServicesMapByRadius  from './PlotFoodServicesMapByRadius.jsx'

const ViewFoodServicesByTown = () => {

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
            <PlotFoodServicesMapByRadius town={selectedTown} />
            <PlotFoodServicesMapByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewFoodServicesByTown