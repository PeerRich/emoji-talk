import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
  <div
  role="tabpanel"
  hidden={value !== index}
  id={`simple-tabpanel-${index}`}
  aria-labelledby={`simple-tab-${index}`}
  {...other}
  >
    {value === index && <>{children}</>}
  </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
  <div className={classes.root}>
    <Tabs variant="fullWidth"
          TabIndicatorProps={{style: {backgroundColor: "transparent"}}}
          indicatorColor="primary"
          textColor="primary"
          value={value} onChange={handleChange}>
      <Tab label="All" {...a11yProps(0)} />
      <Tab label="Countries" {...a11yProps(1)} />
    </Tabs>
    <TabPanel value={value} index={0}>
      {props.first}
    </TabPanel>
    <TabPanel value={value} index={1}>
      {props.second}
    </TabPanel>
  </div>
  );
}
