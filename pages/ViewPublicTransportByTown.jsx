import { useState, useEffect } from 'react';
import { getTownInRental } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotPublicTransportMapByRadius from './PlotPublicTransportMapByRadius.jsx'

const ViewPublicTransportByTown = () => {
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
            <PlotPublicTransportMapByRadius town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewPublicTransportByTown