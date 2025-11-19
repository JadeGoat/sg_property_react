import { useState, useEffect } from 'react';
import { getAllTownPlanningArea } from '../scripts/RestApiDataSource.js'
import MapPlanningArea  from '../components/MapPlanningArea.jsx'

const ViewResources = () => {

    const [planningArea, setPlanningArea] = useState(null);

    useEffect(() => {
        getAllTownPlanningArea(setPlanningArea)
    }, []);
    console.log(planningArea)
    return (
      <div>                  
        { planningArea ?
            <div>
              <MapPlanningArea centerCoordinate={[1.3778, 103.8554]} 
                               zoomValue={13} 
                               planningArea={planningArea}/>
            </div>: <></>
        }
      </div>
    )
}

export default ViewResources