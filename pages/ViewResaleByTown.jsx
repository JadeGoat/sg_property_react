import { useState } from 'react';
import DropDownTown from '../components/DropDownTown'
import PlotAvgResalePriceLineChart from './PlotAvgResalePriceLineChart'

const ViewResaleByTown = () => {

    const [selectedTown, setSelectedTown] = useState("");
    return (
      <div>
          <DropDownTown setParentComponentTown={setSelectedTown} />
          <PlotAvgResalePriceLineChart year={selectedTown} />
      </div>
    )
}

export default ViewResaleByTown