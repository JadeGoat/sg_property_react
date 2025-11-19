import { useState, useEffect } from 'react';
import { getAllTownPlanningArea } from '../scripts/RestApiDataSource.js'
import MapPlanningArea  from '../components/MapPlanningArea.jsx'

const ViewResources = () => {

    const [planningArea, setPlanningArea] = useState(null);

    useEffect(() => {
        getAllTownPlanningArea(setPlanningArea)
    }, []);

    return (
      <div>                  
        { planningArea ?
            <div>
              <MapPlanningArea centerCoordinate={[1.3578, 103.8454]} 
                               zoomValue={11} 
                               planningArea={planningArea}/>
            </div>: <></>
        }
      </div>
    )
}

export default ViewResources