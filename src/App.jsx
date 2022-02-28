/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Sky from './Sky';
import Planets from './Planets';
import StarSelector from './StarSelector';

const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%', position: 'relative' }}
    >
      {value === index && (
        <Box sx={{ p: 3 }} style={{ padding: '0 0 0 5px' }}>
          {children}
        </Box>
      )}
    </div>
  );
};

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1, bgcolor: 'white', display: 'flex', height: '100vh', width: '100%',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Star&nbsp;Selector" {...a11yProps(0)} />
        <Tab label="Sky&nbsp;Background" {...a11yProps(1)} />
        <Tab label="Planets" {...a11yProps(2)} />
        <Tab label="Stations" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <StarSelector />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sky />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Planets />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Stations
      </TabPanel>
    </Box>
  );
};

export default VerticalTabs;
