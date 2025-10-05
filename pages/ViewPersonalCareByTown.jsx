import { useState, useEffect } from 'react';
import { getTownInRental } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotPersonalCareByTown  from './PlotPersonalCareByTown.jsx'
import PlotPersonalCareByRadius  from './PlotPersonalCareByRadius.jsx'

const ViewPersonalCareByTown = () => {

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
            <PlotPersonalCareByRadius town={selectedTown} />
            <PlotPersonalCareByTown town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewPersonalCareByTown