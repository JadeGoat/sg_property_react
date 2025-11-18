import { useState, useEffect } from 'react';
import { getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotPersonalCareMapByTown  from './PlotPersonalCareMapByTown.jsx'
import PlotPersonalCareMapByRadius  from './PlotPersonalCareMapByRadius.jsx'

const ViewPersonalCareByTown = () => {

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
            <PlotPersonalCareMapByRadius town={selectedTown} />
            <PlotPersonalCareMapByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewPersonalCareByTown