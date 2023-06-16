import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

function TabPanel(props) {
  const theme = createTheme({
    palette: {
      primary: purple,
    },
  });
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <ThemeProvider theme={theme}>
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        </ThemeProvider>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Feature" {...a11yProps(0)} />
          <Tab label="Understanding data" {...a11yProps(1)} />
          <Tab label="next.config.js" {...a11yProps(2)} />
          <Tab label="[slug]" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h1>Artist info</h1>
        <video loop autoPlay>
          <source src="..public/video" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h1>Understanding data</h1>
        <div className="flex">
          <div>
            <figure>
              <img className="image" src="/slug-api.png" />
              <figcaption>example of slug page</figcaption>
            </figure>
            <figure>
              <img className="imageSmall" src="/github-logos.png" />
              <figcaption>logos folder in database</figcaption>
            </figure>
          </div>

          <figure>
            <img className="image" src="bands-json.png" />
            <figcaption>logos folder in database</figcaption>
          </figure>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <figure>
          <img className="imageBig" src="/localpic.png" />
          <figcaption>Logo on our server</figcaption>
        </figure>
        <figure>
          <img className="imageBig" src="/placeimg.png" />
          <figcaption>Logo on external server (placeimg)</figcaption>
        </figure>
        <figure>
          <img className="imageBig" src="/next-config-js.png" />
          <figcaption>Adding domains to next.config.js</figcaption>
        </figure>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="flex">
          <figure>
            <img className="image" src="/fetching-slug.png" />
            <figcaption>Fetching slug endpoint</figcaption>
          </figure>
          <div>
            <figure>
              <img className="image" src="/lineup-insertion.png" />
              <figcaption>
                Wrapping our mapped lineup artists with Link
              </figcaption>
            </figure>
            <figure>
              <img className="image" src="/band-logo.png" />
              <figcaption>Fetching logos from server</figcaption>
            </figure>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
