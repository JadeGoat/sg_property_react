import { useState, useEffect } from 'react';
import { getCarparkData, getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotCarparkMapByTown from './PlotCarparkMapByTown.jsx'
import PlotCarparkMapByRadius from './PlotCarparkMapByRadius.jsx'

const ViewCarparkByTown = () => {

    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");
    const [carparkData, setCarparkData] = useState(null);

    useEffect(() => {
        getTownInPlanningArea(setOptions);
        getCarparkData(setCarparkData);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotCarparkMapByRadius town={selectedTown}
                                    carparkData={carparkData} />
            <PlotCarparkMapByTown town={selectedTown}
                                  carparkData={carparkData} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewCarparkByTown