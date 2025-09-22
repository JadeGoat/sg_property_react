import { useState, useEffect } from 'react';
// import { getTownInCarpark } from '../scripts/RestApiDataSource.js'
// import DropDown from '../components/DropDown.jsx'
import PlotChildAndElderlyCareMapByTown  from './PlotChildAndElderlyCareMapByTown.jsx'

const ViewChildAndElerlyCareByTown = () => {

    // const [selectedTown, setSelectedTown] = useState("");
    const [childCareData, setChildCareData] = useState(null);
    const [elderlyCareData, setElderlyCareData] = useState(null);

    useEffect(() => {
        fetch('../data/child_care_data.geojson')
            .then(res => res.json())
            .then(data  => setChildCareData(data));

        fetch('../data/elderly_care_data.geojson')
            .then(res => res.json())
            .then(data  => setElderlyCareData(data));
    }, []);

    return (
      <div>
        {/* <DropDown options={options} 
                  desc={"Select Town:"} 
                  setParentComponent={setSelectedTown} /> */}
                  
        {/* {selectedTown != "" ?*/}
          <div>
            <PlotChildAndElderlyCareMapByTown childCareData={childCareData}
                                              elderlyCareData={elderlyCareData} />
          </div>: <></>
        {/* }  */}
        
      </div>
    )
}

export default ViewChildAndElerlyCareByTown