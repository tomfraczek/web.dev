import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
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
  InputValue,
  InputNotification,
  SliderWrapper,
  InputValueContainer,
  ContactInput,
  PrefixInput,
  InputWrapper,
  BasicInfoInputContainer,
  PhoneNumberInput,
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
  const [rangeValue, setRangeValue] = useState([3000, 7000]);
  const [internationalization, setInternationalization] = useState(false);
  const [languagesNo, setLangguagesNo] = useState(3);
  const [cms, setCms] = useState(false);
  const [hosting, setHosting] = useState(false);
  const [content, setContent] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prefix, setPrefix] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    console.log(rangeValue);
  }, [rangeValue]);

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
          <StepLabel>Basic Information</StepLabel>
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
                  <BasicInfoInputContainer>
                    <InputTitle>Subpages Number</InputTitle>
                    <Slider
                      min={0}
                      max={25}
                      value={value}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                    />
                    <InputValue>{value}</InputValue>
                    <InputNotification>
                      {value === 0 && (
                        <InputTitle>Landing page only</InputTitle>
                      )}
                    </InputNotification>
                  </BasicInfoInputContainer>
                </BoxWrapper>

                <BoxWrapper>
                  <InputDescription>
                    <DescriptionTitle>Internationalization</DescriptionTitle>
                    <DescriptionContent>
                      Internationalization is the process of designing a
                      software application so that it can be adapted to various
                      languages and regions without engineering changes.
                    </DescriptionContent>
                    <DescriptionContent>
                      Localization is the process of adapting internationalized
                      software for a specific region or language by translating
                      text and adding locale-specific components.
                    </DescriptionContent>
                  </InputDescription>

                  <BasicInfoInputContainer>
                    <InputTitle>Internationalization?</InputTitle>
                    <ToggleButtonGroup
                      // style={{ margin: "0 auto" }}
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

                    <SliderWrapper
                      style={{
                        marginTop: "24px",
                        opacity: internationalization ? "1" : "0",
                      }}
                    >
                      <InputTitle>How many languages to support?</InputTitle>
                      <Slider
                        style={{ marginTop: "24px" }}
                        min={1}
                        max={25}
                        value={languagesNo}
                        onChange={handleLanguagesNo}
                        aria-labelledby="input-slider"
                      />

                      <InputValue>{languagesNo}</InputValue>
                    </SliderWrapper>
                  </BasicInfoInputContainer>
                </BoxWrapper>

                <BoxWrapper>
                  <InputDescription>
                    <DescriptionTitle>
                      Content Menagement System (CMS)
                    </DescriptionTitle>
                    <DescriptionContent>
                      A content management system (CMS) is an application that
                      is used to manage content, allowing multiple contributors
                      to create, edit and publish.
                    </DescriptionContent>
                    <DescriptionContent>
                      Content in a CMS is typically stored in a database and
                      displayed in a presentation layer based on a set of
                      templates like a website.
                    </DescriptionContent>
                  </InputDescription>

                  <BasicInfoInputContainer>
                    <InputTitle>Content Menagement System (CMS)?</InputTitle>
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
                  </BasicInfoInputContainer>
                </BoxWrapper>

                <BoxWrapper>
                  <InputDescription>
                    <DescriptionTitle>
                      Do you need content for your website?
                    </DescriptionTitle>
                    <DescriptionContent>
                      We know how difficult it is to run a business, that's why
                      we can take the burden of creating content off your
                      shoulders and you can focus on really important things.
                    </DescriptionContent>
                  </InputDescription>

                  <BasicInfoInputContainer>
                    <InputTitle>
                      Do you need a content for your website?
                    </InputTitle>
                    <ToggleButtonGroup
                      color="primary"
                      value={content}
                      exclusive
                      aria-label="Platform"
                    >
                      <ToggleButton
                        value={true}
                        onClick={() => setContent(true)}
                      >
                        Yes
                      </ToggleButton>
                      <ToggleButton
                        value={false}
                        onClick={() => setContent(false)}
                      >
                        No
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </BasicInfoInputContainer>
                </BoxWrapper>

                <BoxWrapper>
                  <InputDescription>
                    <DescriptionTitle>Hosting and Domain</DescriptionTitle>
                    <DescriptionContent>
                      Domain is the address, which allows a visitor to easily
                      find your website online, while hosting is where the
                      website files are stored. In order to have a functioning
                      website, you need both - a domain and hosting space.
                    </DescriptionContent>
                  </InputDescription>

                  <BasicInfoInputContainer>
                    <InputTitle>Do you need hosting and domain?</InputTitle>
                    <ToggleButtonGroup
                      color="primary"
                      value={hosting}
                      exclusive
                      aria-label="Platform"
                    >
                      <ToggleButton
                        value={true}
                        onClick={() => setHosting(true)}
                      >
                        Yes
                      </ToggleButton>
                      <ToggleButton
                        value={false}
                        onClick={() => setHosting(false)}
                      >
                        No
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </BasicInfoInputContainer>
                </BoxWrapper>

                <BoxWrapper>
                  <InputDescription>
                    <DescriptionTitle>The Budged</DescriptionTitle>
                    <DescriptionContent>
                      By specifying the budget, you will allow us to tailor the
                      offer to your needs even better.
                    </DescriptionContent>
                  </InputDescription>

                  <BasicInfoInputContainer>
                    <InputTitle>The Budged</InputTitle>
                    <Slider
                      value={rangeValue}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      step={100}
                      min={500}
                      max={10000}
                      //   getAriaValueText={valuetext}
                    />
                    <InputValueContainer>
                      <InputValue>{rangeValue[0]}</InputValue>
                      <span>-</span>
                      <InputValue>{rangeValue[1]}</InputValue>
                    </InputValueContainer>
                  </BasicInfoInputContainer>
                </BoxWrapper>
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
                <InputWrapper>
                  <InputContainer>
                    <InputTitle>First Name</InputTitle>
                    <ContactInput
                      value={firstName}
                      onChange={() => setFirstName(value)}
                      type="text"
                    />
                  </InputContainer>

                  <InputContainer>
                    <InputTitle>Last Name</InputTitle>
                    <ContactInput
                      value={lastName}
                      onChange={() => setLastName(value)}
                      type="text"
                    />
                  </InputContainer>
                </InputWrapper>

                <InputContainer>
                  <InputTitle>Email Address</InputTitle>
                  <ContactInput
                    type="email"
                    value={email}
                    onChange={() => setEmail(value)}
                  />
                </InputContainer>

                <InputContainer>
                  <InputTitle>Phone Number</InputTitle>
                  <InputWrapper>
                    <PrefixInput
                      value={prefix}
                      onChange={(e) => console.log(e.target.value)}
                      type="text"
                      placeholder="+48"
                    />
                    <PhoneNumberInput
                      value={phoneNumber}
                      onChange={() => setPhoneNumber(value)}
                      placeholder="000-000-000"
                      type="text"
                    />
                  </InputWrapper>
                </InputContainer>
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
          <Button
            color="error"
            onClick={() => setActiveStep(1)}
            sx={{ mt: 1, mr: 1 }}
          >
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
