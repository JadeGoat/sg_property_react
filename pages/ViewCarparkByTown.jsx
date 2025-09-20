import { useState, useEffect } from 'react';
import { getTownInCarpark } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotCarparkMapByTown from './PlotCarparkMapByTown.jsx'

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
            <PlotCarparkMapByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewCarparkByTown