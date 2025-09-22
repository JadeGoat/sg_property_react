// import { useState, useEffect } from 'react';
// import { getTownInCarpark } from '../scripts/RestApiDataSource.js'
// import DropDown from '../components/DropDown.jsx'
import PlotChildCareMapByTown  from './PlotChildCareMapByTown.jsx'

const ViewChildCareByTown = () => {
    // const [options, setOptions] = useState([])
    // const [selectedTown, setSelectedTown] = useState("");

    // useEffect(() => {
    //     getTownInCarpark(setOptions);
    // }, []);

    return (
      <div>
        {/* <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} /> */}
                  
        {/* {selectedTown != "" ?
          <div>
            <PlotChildCareMapByTown town={selectedTown} />
          </div>: <></>
        } */}
        <PlotChildCareMapByTown />
      </div>
    )
}

export default ViewChildCareByTown