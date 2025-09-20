import { useState, useEffect } from 'react';
import { getTownInCarpark } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotCarparkHeatmapByTown from './PlotCarparkHeatmapByTown.jsx'

const ViewCarparkByTown = () => {
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
            <PlotCarparkHeatmapByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewCarparkByTown