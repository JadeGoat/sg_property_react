import { useState, useEffect } from 'react';
import { getTownInRental } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotHawkersAndEateriesMapByTown  from './PlotHawkersAndEateriesMapByTown.jsx'
import PlotHawkersAndEateriesMapByRadius  from './PlotHawkersAndEateriesMapByRadius.jsx'

const ViewHawkersAndEateriesByTown = () => {

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
            <PlotHawkersAndEateriesMapByRadius town={selectedTown} />
            <PlotHawkersAndEateriesMapByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewHawkersAndEateriesByTown