import { useState } from 'react';
import DropDownTown from '../components/DropDownTown'

const ViewResaleByTown = () => {

  const [selectedTown, setSelectedTown] = useState("");
  return (
    <div>
      <h2>Under Construction</h2>
      <DropDownTown setParentComponentTown={setSelectedTown} />
    </div>
  )
}

export default ViewResaleByTown