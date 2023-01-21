import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputSlider } from "./slider.component";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
// import { Button } from "components/button";
import {
  ButtonsContainer,
  Textarea,
  InputContainer,
  ContentContainer,
  ContentPart,
  BoxWrapper,
  InputDescription,
  DescriptionTitle,
  DescriptionContent,
  InputTitle,
} from "./quoteForm.styles";
import { color } from "theme";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Stack from "@mui/material/Stack";

//

const Input = styled(MuiInput)`
  width: 42px;
`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it
  const [value, setValue] = useState(3);
  const [rangeValue, setRangeValue] = useState([2000, 3000]);
  const [internationalization, setInternationalization] = useState(false);
  const [languagesNo, setLangguagesNo] = useState(1);
  const [cms, setCms] = useState(false);
  const [hosting, setHosting] = useState(false);
  const [content, setContent] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    // setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };

  const handleChange = (event, newValue) => {
    setRangeValue(newValue);
  };

  const handleInternationalization = () => {
    setInternationalization((prevState) => !prevState);
  };

  const handleLanguagesNo = (e) => {
    setLangguagesNo(e.target.value);
  };

  const handleCms = (e) => {
    setCms((prevState) => !prevState);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="test" {...register("example")} /> */}

      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>basic information</StepLabel>
          <StepContent>
            <ContentContainer>
              <ContentPart>
                <BoxWrapper>
                  <InputDescription>
                    <DescriptionTitle>Subpages Number</DescriptionTitle>
                    <DescriptionContent>
                      A subpage on a website is any page on the site other than
                      the homepage. A page that appears below the top-level
                      pages in a websites navigation.
                    </DescriptionContent>
                    <DescriptionContent>
                      These pages often appear in a top navigation bar or
                      sidebar menu. Think of subpages as “child pages” of the
                      “parent page.”
                    </DescriptionContent>
                    <DescriptionContent>
                      For example www.yoursite.com/about-us/ would be a subpage
                      of www.yoursite.com while
                      www.yoursite.com/about-us/contact is a subpage of
                      www.yoursite.com/about-us.
                    </DescriptionContent>
                  </InputDescription>
                  <InputContainer>
                    <InputTitle>how many sub-pages</InputTitle>
                    <Slider
                      min={1}
                      max={25}
                      value={value}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                    />
                    <div>{value}</div>
                  </InputContainer>
                </BoxWrapper>

                <InputContainer>
                  <Typography>Internationalization?</Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={internationalization}
                    exclusive
                    aria-label="Platform"
                  >
                    <ToggleButton
                      value={true}
                      onClick={() => setInternationalization(true)}
                    >
                      Yes
                    </ToggleButton>
                    <ToggleButton
                      value={false}
                      onClick={() => setInternationalization(false)}
                    >
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>
                  {internationalization && (
                    <>
                      <Typography>How many languages to support?</Typography>
                      <Slider
                        min={1}
                        max={25}
                        value={languagesNo}
                        onChange={handleLanguagesNo}
                        aria-labelledby="input-slider"
                      />
                      <div>{languagesNo}</div>
                    </>
                  )}
                </InputContainer>

                <InputContainer>
                  <Typography>CMS - Content Menagement System?</Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={cms}
                    exclusive
                    aria-label="Platform"
                  >
                    <ToggleButton value={true} onClick={() => setCms(true)}>
                      Yes
                    </ToggleButton>
                    <ToggleButton value={false} onClick={() => setCms(false)}>
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>
                </InputContainer>

                <InputContainer>
                  <Typography>
                    Should we create the content for your website?
                  </Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={content}
                    exclusive
                    aria-label="Platform"
                  >
                    <ToggleButton value={true} onClick={() => setContent(true)}>
                      Yes
                    </ToggleButton>
                    <ToggleButton
                      value={false}
                      onClick={() => setContent(false)}
                    >
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>
                </InputContainer>

                <InputContainer>
                  <p>Do you need hosting?</p>
                  <ToggleButtonGroup
                    color="primary"
                    value={hosting}
                    exclusive
                    aria-label="Platform"
                  >
                    <ToggleButton value={true} onClick={() => setHosting(true)}>
                      Yes
                    </ToggleButton>
                    <ToggleButton
                      value={false}
                      onClick={() => setHosting(false)}
                    >
                      No
                    </ToggleButton>
                  </ToggleButtonGroup>
                </InputContainer>

                <InputContainer>
                  <p>Whats your budget?</p>
                  <Slider
                    value={rangeValue}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={250}
                    max={10000}
                    //   getAriaValueText={valuetext}
                  />
                  <div>{rangeValue}</div>
                </InputContainer>
              </ContentPart>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {activeStep === 3 - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </ContentContainer>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Contact details</StepLabel>
          <StepContent>
            <Box sx={{ mb: 2 }}>
              <>
                <Typography>Name & Surname</Typography>
                <Input
                  required
                  sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
                />

                <Typography>Email address</Typography>
                <Input
                  placeholder="john.doe@example.com"
                  required
                  type="email"
                  sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
                />

                <Typography>Phone Number</Typography>
                <Input
                  placeholder="+48"
                  type="text"
                  inputMode="numeric"
                  required
                  sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
                />
                <Input
                  placeholder="000-000-000"
                  type="text"
                  inputMode="numeric"
                  required
                  sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
                />

                <Typography>Message</Typography>
                <Textarea
                  color="primary"
                  minRows={2}
                  size="lg"
                  variant="solid"
                />
              </>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {activeStep === 3 - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Summary</StepLabel>
          <StepContent>
            <Box sx={{ mb: 2 }}>
              <Stack spacing={2}>
                <Item elevation={12}>
                  You need your website to have {value} pages
                </Item>
                <Item elevation={12}>
                  You {internationalization ? "do" : "don't"} need
                  internationalize your website.{" "}
                  {internationalization &&
                    `You required ${languagesNo} languages to cover.`}
                </Item>
                <Item elevation={12}>
                  You {cms ? "do" : "don't"} need CMS for your website.
                </Item>
                <Item elevation={12}>
                  You {content ? "do" : "don't"} want us to create content for
                  your website.
                </Item>
                <Item elevation={12}>
                  You {hosting ? "do" : "don't"} need hosting for you website.
                </Item>
                <Item elevation={12}>Your budged is {rangeValue}.</Item>
              </Stack>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
      {activeStep === 2 && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished.</Typography>
          <Typography>
            If you entered correct data submit the quote. If You want to change
            your data please go back and correct data.
          </Typography>
          <Button
            variant="contained"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Reset and start over
          </Button>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Back
          </Button>
          <Button color="error" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Cancel
          </Button>
        </Paper>
      )}

      {/* 

      <>
        <p>Do you need content?</p>
        <p>Off</p>
        <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
        <p>On</p>
      </> */}

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
};
