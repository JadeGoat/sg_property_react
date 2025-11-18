import { useState, useEffect } from 'react';
import { getHawkerCentreData, getHealthierEateriesData, getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotFoodServicesMapByTown  from './PlotFoodServicesMapByTown.jsx'
import PlotFoodServicesMapByRadius  from './PlotFoodServicesMapByRadius.jsx'

const ViewFoodServicesByTown = () => {

    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");
    const [hawkerCentreData, setHawkerCentreData] = useState(null);
    const [healthierEateriesData, setHealthierEateriesData] = useState(null);

    useEffect(() => {
        getTownInPlanningArea(setOptions);
        getHawkerCentreData(setHawkerCentreData)
        getHealthierEateriesData(setHealthierEateriesData);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotFoodServicesMapByRadius town={selectedTown} 
                                         hawkerCentreData={hawkerCentreData}
                                         healthierEateriesData={healthierEateriesData} />
            <PlotFoodServicesMapByTown town={selectedTown} 
                                       hawkerCentreData={hawkerCentreData}
                                       healthierEateriesData={healthierEateriesData} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewFoodServicesByTown