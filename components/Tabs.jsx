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
          <Tab label="[slug]" {...a11yProps(2)} />
          <Tab label="next.config.js" {...a11yProps(3)} />
          <Tab label="other features" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h1>ARTIST INFO</h1>
        <video width={900} height={500} loop autoPlay controls>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h1>UNDERSTANDING DATA</h1>
        <div className="flex">
          <div>
            <figure>
              <img className="image" src="/slug-api.png" alt="slug-api" />
              <figcaption>example of slug page</figcaption>
            </figure>
            <figure>
              <img
                className="imageSmall"
                src="/github-logos.png"
                alt="github"
              />
              <figcaption>logos folder in database</figcaption>
            </figure>
          </div>

          <figure>
            <img className="image" src="bands-json.png" alt="bands-json" />
            <figcaption>logos folder in database</figcaption>
          </figure>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex">
          <figure>
            <img className="image" src="/fetching-slug.png" alt="slug" />
            <figcaption>Fetching slug endpoint</figcaption>
          </figure>
          <div>
            <figure>
              <img className="image" src="/lineup-insertion.png" alt="lineup" />
              <figcaption>
                Wrapping our mapped lineup artists with Link
              </figcaption>
            </figure>
            <figure>
              <img className="image" src="/band-logo.png" alt="band-logo" />
              <figcaption>Fetching logos from server</figcaption>
            </figure>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <figure>
          <img className="imageBig" src="/localpic.png" alt="logo" />
          <figcaption>Logo on our server</figcaption>
        </figure>
        <figure>
          <img className="imageBig" src="/placeimg.png" alt="placeimg" />
          <figcaption>Logo on external server (placeimg)</figcaption>
        </figure>
        <figure>
          <img
            className="imageBig"
            src="/next-config-js.png"
            alt="next.congif.js"
          />
          <figcaption>Adding domains to next.config.js</figcaption>
        </figure>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="flex-justified">
          <figure>
            <img className="image" src="/tents.png" alt="tents" />
            <figcaption>2-person and 3-person tents</figcaption>
          </figure>
          <figure>
            <img className="image" src="/areas.png" alt="areas" />
            <figcaption>
              no pointer events when there are no available spots
            </figcaption>
          </figure>
        </div>
      </TabPanel>
    </Box>
  );
}
