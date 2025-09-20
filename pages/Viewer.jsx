// For pages components
import ViewRentalByYear from './ViewRentalByYear';
import ViewRentalByTown from './ViewRentalByTown';
import ViewResaleByYear from './ViewResaleByYear';
import ViewResaleByTown from './ViewResaleByTown';
import ViewCarparkByTown from './ViewCarparkByTown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Viewer = () => {

  return (
    <div>
        <Tabs defaultIndex={0}>
          
          <TabList>
            <Tab>View By Year</Tab>
            <Tab>View By Town</Tab>
          </TabList>

          <TabPanel>
            {/* Main tab 1 */}
            <Tabs>
              <TabList>
                <Tab>Resale</Tab>
                <Tab>Rental</Tab>
              </TabList>
              {/* Sub tab */}
              <TabPanel><ViewResaleByYear/></TabPanel>
              <TabPanel><ViewRentalByYear/></TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            {/* Main tab 2 */}
            <Tabs>
              <TabList>
                  <Tab>Carpark</Tab>
                  <Tab>Resale</Tab>
                  <Tab>Rental</Tab>
              </TabList>
              {/* Sub tab */}
               <TabPanel><ViewCarparkByTown/></TabPanel>
              <TabPanel><ViewResaleByTown/></TabPanel>
              <TabPanel><ViewRentalByTown/></TabPanel>
            </Tabs>
          </TabPanel>

        </Tabs>
    </div>
  )
}

export default Viewer