// For pages components
import ViewRentalByYear from './ViewRentalByYear';
import ViewRentalByTown from './ViewRentalByTown';
import ViewResaleByYear from './ViewResaleByYear';
import ViewResaleByTown from './ViewResaleByTown';
import ViewCarparkByTown from './ViewCarparkByTown';
import ViewPublicTransportByTown from './ViewPublicTransportByTown';
import ViewChildAndElerlyCareByTown from './ViewChildAndElerlyCareByTown';
import ViewHawkersAndEateriesByTown from './ViewHawkersAndEateriesByTown';
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

              {/* Sub tab 1 - Resale */}
              <TabPanel><ViewResaleByYear/></TabPanel>

              {/* Sub tab 2 - Rental */}
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
                  <Tab>Hawkers/Eateries</Tab>
              </TabList>

              {/* Sub tab 1 - Resale */}
              <TabPanel><ViewResaleByTown/></TabPanel>

              {/* Sub tab 2 - Rental */}
              <TabPanel><ViewRentalByTown/></TabPanel>

              {/* Sub tab 3 - Transport */}
              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Carpark</Tab>
                    <Tab>Public Transport</Tab>
                  </TabList>
                  <TabPanel><ViewCarparkByTown/></TabPanel>
                  <TabPanel><ViewPublicTransportByTown/></TabPanel>
                </Tabs>
              </TabPanel>

              {/* Sub tab 4 - Child/Elderly Care */}
              <TabPanel><ViewChildAndElerlyCareByTown/></TabPanel>
              
              {/* Sub tab 5 - Hawkers and Eateries */}
              <TabPanel><ViewHawkersAndEateriesByTown/></TabPanel>

            </Tabs>
          </TabPanel>

        </Tabs>
    </div>
  )
}

export default Viewer