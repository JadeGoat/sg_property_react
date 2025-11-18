import { useState, useEffect } from 'react';
import { getChasClinicData, getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotMedicalCareMapByRadius from './PlotMedicalCareMapByRadius.jsx'

const ViewMedicalCareByTown = () => {
    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");
    const [chasClinicData, setChasClinicData] = useState(null);

    useEffect(() => {
        getTownInPlanningArea(setOptions);
        getChasClinicData(setChasClinicData);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotMedicalCareMapByRadius town={selectedTown} chasClinicData={chasClinicData}/>
          </div>: <></>
        }
      </div>
    )
}

export default ViewMedicalCareByTown