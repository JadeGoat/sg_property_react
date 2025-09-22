// For pages components
import ViewRentalByYear from './ViewRentalByYear';
import ViewRentalByTown from './ViewRentalByTown';
import ViewResaleByYear from './ViewResaleByYear';
import ViewResaleByTown from './ViewResaleByTown';
import ViewCarparkByTown from './ViewCarparkByTown';
import ViewChildAndElerlyCareByTown from './ViewChildAndElerlyCareByTown';
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
            {/* Main tab - By Year */}
            <Tabs>
              <TabList>
                <Tab>Resale</Tab>
                <Tab>Rental</Tab>
              </TabList>

              {/* Sub tab - Resale */}
              <TabPanel><ViewResaleByYear/></TabPanel>

              {/* Sub tab - Rental */}
              <TabPanel><ViewRentalByYear/></TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            {/* Main tab - By Town */}
            <Tabs>
              <TabList>
                  <Tab>Resale</Tab>
                  <Tab>Rental</Tab>
                  <Tab>Transport</Tab>
                  <Tab>Child/Elderly Care</Tab>
              </TabList>

              {/* Sub tab - Resale */}
              <TabPanel><ViewResaleByTown/></TabPanel>

              {/* Sub tab - Rental */}
              <TabPanel><ViewRentalByTown/></TabPanel>

              {/* Sub tab - Transport */}
              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Carpark</Tab>
                    <Tab>Bus Stop</Tab>
                  </TabList>
                  <TabPanel><ViewCarparkByTown/></TabPanel>
                  <TabPanel></TabPanel>
                </Tabs>
              </TabPanel>

              {/* Sub tab - Child/Elderly Care */}
              <TabPanel><ViewChildAndElerlyCareByTown/></TabPanel>
              
            </Tabs>
          </TabPanel>

        </Tabs>
    </div>
  )
}

export default Viewer