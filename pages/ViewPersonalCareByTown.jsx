import { useState, useEffect } from 'react';
import { getChildCareData, getElderlyCareData, getDisabilityServicesData } from '../scripts/RestApiDataSource.js'
import { getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotPersonalCareMapByTown  from './PlotPersonalCareMapByTown.jsx'
import PlotPersonalCareMapByRadius  from './PlotPersonalCareMapByRadius.jsx'

const ViewPersonalCareByTown = () => {

    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");
    const [childCareData, setChildCareData] = useState(null);
    const [elderlyCareData, setElderlyCareData] = useState(null);
    const [disabilityServicesData, setDisabilityServicesData] = useState(null);

    useEffect(() => {
        getTownInPlanningArea(setOptions);
        getChildCareData(setChildCareData)
        getElderlyCareData(setElderlyCareData);
        getDisabilityServicesData(setDisabilityServicesData);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotPersonalCareMapByRadius town={selectedTown}
                                         childCareData={childCareData}
                                         elderlyCareData={elderlyCareData}
                                         disabilityServicesData={disabilityServicesData} />
            <PlotPersonalCareMapByTown town={selectedTown} 
                                       childCareData={childCareData}
                                       elderlyCareData={elderlyCareData}
                                       disabilityServicesData={disabilityServicesData} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewPersonalCareByTown