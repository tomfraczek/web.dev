import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputSlider } from "./slider.component";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

const Input = styled(MuiInput)`
  width: 42px;
`;

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

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="test" {...register("example")} /> */}

      <>
        <p>how many sub-pages</p>
        <Slider
          min={1}
          max={25}
          value={value}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
        <div>{value}</div>
      </>

      <>
        <p>whats your budged?</p>
        <Slider
          value={rangeValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={250}
          max={10000}
          //   getAriaValueText={valuetext}
        />
        <div>{rangeValue}</div>
      </>
      <>
        <p>Internationalization?</p>
        <Checkbox
          {...label}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          value={internationalization}
          onChange={handleInternationalization}
        />
        {internationalization && (
          <>
            <p>How many languages supported?</p>
            <Slider
              min={1}
              max={25}
              value={value}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
            <div>{value}</div>
          </>
        )}
      </>

      <>
        <p>CMS (Content Menagment System)?</p>
        <Checkbox {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
      </>

      <>
        <p>Hosting?</p>
        <Checkbox {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
      </>
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

      <input type="submit" />
    </form>
  );
};
