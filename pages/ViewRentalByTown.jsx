import { useState, useEffect } from 'react';
import { getTownInRental } from '../scripts/RestApiDataSource.js'
import DropDown from '../components/DropDown.jsx'
import PlotAvgRentalPriceLineChart from './PlotAvgRentalPriceLineChart.jsx'

const ViewRentalByTown = () => {

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
            <PlotAvgRentalPriceLineChart town={selectedTown} />
          </div>: <></>
        }
      </div>
    )
}

export default ViewRentalByTown