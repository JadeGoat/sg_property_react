import { useState, useEffect } from 'react';
import { getBusStopData, getMrtStationData, getTownInPlanningArea } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotPublicTransportMapByTown from './PlotPublicTransportMapByTown.jsx'
import PlotPublicTransportMapByRadius from './PlotPublicTransportMapByRadius.jsx'

const ViewPublicTransportByTown = () => {

  const [options, setOptions] = useState([])
  const [selectedTown, setSelectedTown] = useState("");
  const [busStopData, setBusStopData] = useState(null);
  const [mrtStationData, setMrtStationData] = useState(null);

  useEffect(() => {
    getTownInPlanningArea(setOptions);
    getBusStopData(setBusStopData);
    getMrtStationData(setMrtStationData);
  }, []);

  return (
    <div>
      <DropDown options={options} 
                desc={"Select Town:"} 
                setParentComponent={setSelectedTown} />
                
      {selectedTown != "" ?
        <div>
          <PlotPublicTransportMapByRadius town={selectedTown}
                                          busStopData={busStopData}
                                          mrtStationData={mrtStationData} />
          <PlotPublicTransportMapByTown town={selectedTown}
                                        busStopData={busStopData}
                                        mrtStationData={mrtStationData} />
        </div>: <></>
      }
    </div>
  )
}

export default ViewPublicTransportByTown