import { useState, useEffect } from 'react';
import { getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotMedicalCareMapByRadius from './PlotMedicalCareMapByRadius.jsx'

const ViewMedicalCareByTown = () => {
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
            <PlotMedicalCareMapByRadius town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewMedicalCareByTown