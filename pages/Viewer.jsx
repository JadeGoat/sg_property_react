// For pages components
import ViewRentalByYear from './ViewRentalByYear';
import ViewRentalByTown from './ViewRentalByTown';
import ViewResaleByYear from './ViewResaleByYear';
import ViewResaleByTown from './ViewResaleByTown';
import ViewCarparkByTown from './ViewCarparkByTown';
import ViewPublicTransportByTown from './ViewPublicTransportByTown';
import ViewPersonalCareByTown from './ViewPersonalCareByTown';
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
                  <Tab>Property</Tab>
                  <Tab>Transport</Tab>
                  <Tab>Lifecare & Healthcare Care</Tab>
                  <Tab>Food & Retail Services</Tab>
              </TabList>

              {/* Sub tab 1 - Property */}
              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Resale</Tab>
                    <Tab>Rental</Tab>
                  </TabList>
                  <TabPanel><ViewResaleByTown/></TabPanel>
                  <TabPanel><ViewRentalByTown/></TabPanel>
                </Tabs>
              </TabPanel>

              {/* Sub tab 2 - Transport */}
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

              {/* Sub tab 3 - Lifecare & Healthcare Services */}
              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Lifecare Services</Tab>
                    <Tab>Healthcare Services</Tab>
                  </TabList>
                  <TabPanel><ViewPersonalCareByTown/></TabPanel>
                  <TabPanel></TabPanel>
                </Tabs>
              </TabPanel>

              {/* Sub tab 4 - Food & Retails Services */}
              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Food Services</Tab>
                    <Tab>Retails Services</Tab>
                  </TabList>
                  <TabPanel><ViewHawkersAndEateriesByTown/></TabPanel>
                  <TabPanel></TabPanel>
                </Tabs>
              </TabPanel>

            </Tabs>
          </TabPanel>

        </Tabs>
    </div>
  )
}

export default Viewer