// For pages components
import ViewResaleByYear from './ViewResaleByYear';
import ViewResaleByTown from './ViewResaleByTown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Viewer = () => {

  return (
    <div>
        <Tabs defaultIndex={0}>
          
          <TabList>
            <Tab>View Resale By Year</Tab>
            <Tab>View Resale By Town</Tab>
          </TabList>

          <TabPanel>
            <ViewResaleByYear/>
          </TabPanel>

          <TabPanel>
            <ViewResaleByTown/>
          </TabPanel>

        </Tabs>
    </div>
  )
}

export default Viewer