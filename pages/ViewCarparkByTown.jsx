import { useState, useEffect } from 'react';
import { getTownInRental } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotCarparkMapByTown from './PlotCarparkMapByTown.jsx'
import PlotCarparkMapByRadius from './PlotCarparkMapByRadius.jsx'

const ViewCarparkByTown = () => {
    const [options, setOptions] = useState([])
    const [selectedTown, setSelectedTown] = useState("");

    useEffect(() => {
        getTownInRental(setOptions);
    }, []);

    return (
      <div>
        <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} />
                  
        {selectedTown != "" ?
          <div>
            <PlotCarparkMapByRadius town={selectedTown} />
            <PlotCarparkMapByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewCarparkByTown