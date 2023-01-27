import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import Switch from "@mui/material/Switch";
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
  SummaryAnswer,
  SummaryQuestionsContainer,
  SummaryContainer,
  ValInputContainer,
  InputError,
  Text,
} from "./quoteForm.styles";
import { color } from "theme";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Stack from "@mui/material/Stack";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { logoRed } from "theme/color";
import { HighlightRed } from "theme/media";

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
  const [emailError, setEmailError] = useState(false);
  const [prefixError, setPrefixError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const handleNext = () => {
    emailValidate();
    firstNameValidate();
    lastNameValidate();
    phoneNoValidate();
    prefixNoValidate();

    if (!contactErrors && !contactsEmpty)
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

  const handleLanguagesNo = (e) => {
    setLangguagesNo(e.target.value);
  };

  const emailValidate = () => {
    const regexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regexp.exec(email) === null) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const prefixNoValidate = () => {
    const regexp = /\+[0-9]+$/;
    if (regexp.exec(prefix) === null) {
      setPrefixError(true);
    } else {
      setPrefixError(false);
    }
  };

  const firstNameValidate = () => {
    const regexp = /^[a-z ,.'-]+$/i;
    // console.log(regexp, regexp.exec(phoneNumber) === null);
    if (regexp.exec(firstName) === null) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const lastNameValidate = () => {
    const regexp = /^[a-z ,.'-]+$/i;
    // console.log(regexp, regexp.exec(phoneNumber) === null);
    if (regexp.exec(lastName) === null) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };

  const phoneNoValidate = () => {
    const regexp = /[0-9]+$/;

    if (regexp.exec(phoneNumber) === null) {
      setPhoneNoError(true);
    } else {
      setPhoneNoError(false);
    }
  };

  const contactErrors =
    emailError ||
    prefixError ||
    phoneNoError ||
    firstNameError ||
    lastNameError;

  const contactsEmpty =
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    prefix === "" ||
    phoneNumber === "";

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
                    onClick={() =>
                      setActiveStep((prevActiveStep) => prevActiveStep + 1)
                    }
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
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
                    <InputTitle>
                      First Name<HighlightRed>*</HighlightRed>
                    </InputTitle>
                    <ValInputContainer>
                      <ContactInput
                        placeholder="e.g., John"
                        value={firstName}
                        style={{ borderColor: firstNameError && logoRed }}
                        onChange={(e) => setFirstName(e.target.value)}
                        onBlur={firstNameValidate}
                        type="text"
                      />
                      <InputError>
                        {firstNameError &&
                          "Enter valid first name - characters 'A - Z'"}
                      </InputError>
                    </ValInputContainer>
                  </InputContainer>

                  <InputContainer>
                    <InputTitle>
                      Last Name<HighlightRed>*</HighlightRed>
                    </InputTitle>
                    <ValInputContainer>
                      <ContactInput
                        value={lastName}
                        placeholder="Smith"
                        style={{ borderColor: lastNameError && logoRed }}
                        onBlur={lastNameValidate}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                      />
                      <InputError>
                        {lastNameError &&
                          "Enter valid last name - characters 'A - Z'"}
                      </InputError>
                    </ValInputContainer>
                  </InputContainer>
                </InputWrapper>

                <InputContainer>
                  <InputTitle>Email Address</InputTitle>
                  <ValInputContainer>
                    <ContactInput
                      style={{ borderColor: emailError && logoRed }}
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={emailValidate}
                    />
                    <InputError>
                      {emailError &&
                        "Enter valid email address - name@company.com"}
                    </InputError>
                  </ValInputContainer>
                </InputContainer>

                <InputContainer>
                  <InputTitle>Phone Number</InputTitle>
                  <ValInputContainer>
                    <InputWrapper>
                      <PrefixInput
                        value={prefix}
                        style={{ borderColor: prefixError && logoRed }}
                        onChange={(e) => setPrefix(e.target.value)}
                        onBlur={(e) => prefixNoValidate(e.target.value)}
                        type="text"
                        placeholder="+48"
                      />
                      <PhoneNumberInput
                        value={phoneNumber}
                        style={{ borderColor: phoneNoError && logoRed }}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        onBlur={phoneNoValidate}
                        placeholder="123456789"
                        type="text"
                      />
                    </InputWrapper>
                    <InputError>
                      {prefixError && (
                        <span>
                          Prefix Number: Please use numbers [0 - 9] and '+' sign
                          for prefix only
                        </span>
                      )}
                      {phoneNoError && (
                        <span>
                          Phone Number: Please use numbers [0 - 9] only
                        </span>
                      )}
                    </InputError>
                  </ValInputContainer>
                </InputContainer>
              </>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Continue
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>Summary</StepLabel>
          <StepContent sx={{ p: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Stack spacing={2}>
                <Item
                  elevation={12}
                  sx={{ pb: "26px" }}
                  style={{ textAlign: "right" }}
                >
                  <DescriptionTitle
                    style={{
                      textAlign: "left",
                      marginTop: "20px",
                      marginLeft: "16px",
                    }}
                  >
                    Personal Information
                  </DescriptionTitle>
                  <TableContainer sx={{ textAlign: "right" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="left">Answer</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            First name & Last Name
                          </TableCell>
                          <TableCell align="left">{`${firstName} ${lastName}`}</TableCell>
                        </TableRow>

                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Email Address
                          </TableCell>
                          <TableCell align="left">{email}</TableCell>
                        </TableRow>

                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Phone Number
                          </TableCell>
                          <TableCell align="left">
                            {`${prefix} ${phoneNumber}`}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Button
                    variant="contained"
                    onClick={() => setActiveStep(1)}
                    sx={{ mt: 2, ml: "auto" }}
                  >
                    Edit
                  </Button>
                </Item>

                <Item
                  elevation={12}
                  sx={{ pb: "26px" }}
                  style={{ textAlign: "right" }}
                >
                  <DescriptionTitle
                    style={{
                      textAlign: "left",
                      marginTop: "20px",
                      marginLeft: "16px",
                    }}
                  >
                    Your requirements
                  </DescriptionTitle>
                  <TableContainer sx={{ textAlign: "right" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="left">Answer</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Number of Subpages
                          </TableCell>
                          <TableCell align="left">{value}</TableCell>
                        </TableRow>

                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Internationalization
                          </TableCell>
                          <TableCell align="left">
                            {internationalization ? "Yes" : "No"}
                          </TableCell>
                        </TableRow>

                        {internationalization && (
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              Languages supported
                            </TableCell>
                            <TableCell align="left">{languagesNo}</TableCell>
                          </TableRow>
                        )}

                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Content Menagment System (CMS)
                          </TableCell>
                          <TableCell align="left">
                            {cms ? "Yes" : "No"}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Content for your website
                          </TableCell>
                          <TableCell align="left">
                            {content ? "Yes" : "No"}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Hosting & Server
                          </TableCell>
                          <TableCell align="left">
                            {content ? "Yes" : "No"}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            Your budged
                          </TableCell>
                          <TableCell align="left">
                            {`${rangeValue[0]} - ${rangeValue[1]}`}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Button
                    variant="contained"
                    onClick={() => setActiveStep(0)}
                    sx={{ mt: 2, ml: "auto" }}
                  >
                    Edit
                  </Button>
                </Item>
              </Stack>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
      {activeStep === 2 && (
        <Paper square elevation={0} sx={{ p: 3, ml: 2 }}>
          <Text>Congratulation, you completed the form!</Text>
          <Text>
            Check the porvided information, correct them if needed and
            you&apos;re ready to go!
          </Text>
          <Text>Submit the form and our tem will contact you shortly.</Text>

          <Button
            variant="contained"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Submit
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
