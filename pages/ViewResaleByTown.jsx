import { useState } from 'react';
import DropDownTown from '../components/DropDownTown'
import PlotAvgResalePriceLineChart from './PlotAvgResalePriceLineChart'
import PlotAvgResaleLeaseBarChart from './PlotAvgResaleLeaseBarChart'

const ViewResaleByTown = () => {

    const [selectedTown, setSelectedTown] = useState("");
    return (
      <div>
          <DropDownTown setParentComponentTown={setSelectedTown} />
          <PlotAvgResalePriceLineChart town={selectedTown} />
          <PlotAvgResaleLeaseBarChart town={selectedTown} />
      </div>
    )
}

export default ViewResaleByTown