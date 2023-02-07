import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { color } from "theme";

import Check from "../img/check.png";

import {
  TabDescriptionContainer,
  TabsContainer,
  DescriptionTitle,
  DescriptionContainer,
  DetailTitle,
  DetailDescription,
  DescriptionContent,
  ImageContainer,
  Image,
  TabContent,
  Table,
} from "./offerTabs.styles";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#ffffff",
  },
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    margin: "0 12px",
    color: color.white,
    backgroundColor: "rgba(40,40,40,.75)",

    "&:first-of-type": {
      marginLeft: 0,
    },

    "&:last-of-type": {
      marginRight: 0,
    },
    "&:hover": {
      backgroundColor: "rgba(40,40,40,.4)",
    },
    "&.Mui-selected": {
      color: color.lightBlue,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgb(255, 255, 255)",
    },
  })
);

function TabPanel(props) {
  const { value, index, description, ...other } = props;

  return (
    <TabContent
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: 0 }}>
          {Object.entries(description).map(([key, value], i) => (
            <TabDescriptionContainer key={`${key}-${i}`}>
              <DetailTitle>{key}</DetailTitle>
              <DetailDescription>{value}</DetailDescription>
            </TabDescriptionContainer>
          ))}
        </Box>
      )}
    </TabContent>
  );
}

function TablePanel(props) {
  const { value, index, description, ...other } = props;

  return (
    <TabContent
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Table>
          <tbody>
            {Object.entries(description).map(([key, value], i) => (
              <tr key={`${key}-${i}`}>
                <td>{key}</td>
                <td>
                  <img src={Check} alt="check" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </TabContent>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({
  offers,
  defaultIndex,
  setDefaultIndex,
}) {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDefaultIndex(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
    setDefaultIndex(index);
  };

  return (
    <TabsContainer>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <AppBar position="static" style={{ background: "none" }}>
          <StyledTabs
            value={defaultIndex}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {offers.map(({ title }, i) => (
              <StyledTab label={title} {...a11yProps(i)} />
            ))}
          </StyledTabs>
        </AppBar>
        <SwipeableViews
          containerStyle={{
            transition: "transform 0.5s cubic-bezier(0.15, 0.3, 0.25, 1) 0s",
          }}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={defaultIndex}
          onChangeIndex={handleChangeIndex}
        >
          {offers.map(({ items, title, icon }, i) => (
            <DescriptionContainer>
              <DescriptionTitle>{title} Features & Specs</DescriptionTitle>
              <DescriptionContent>
                <TabPanel description={items} value={defaultIndex} index={i} />

                <TablePanel
                  description={items}
                  value={defaultIndex}
                  index={i}
                />
              </DescriptionContent>
            </DescriptionContainer>
          ))}
        </SwipeableViews>
      </Box>
    </TabsContainer>
  );
}
