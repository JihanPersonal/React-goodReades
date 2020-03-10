import React, { useState } from "react";
import {
  Slider,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
  FormHelperText,
  Typography
} from "@material-ui/core";
import "../css/slider.css";
const Budget = props => {
  //#region Use Stage
  const [percent, setPercent] = useState(15);
  const [values, setValues] = React.useState({
    salary: "",
    expense: "",
    saving: "",
    errormessage: ""
  });
  //#endregion

  //Slide Marks
  const marks = [
    { value: 1, label: "1%" },
    { value: 15, label: "15%" },
    { value: 30, label: "30%" }
  ];

  //#region Handlers
  //Percentage change handler
  const percentageChange = value => {
    if (value !== percent) {
      setPercent(value);
      if (values.salary !== "") {
        let expense = (values.salary * value) / 100;
        let saving = values.salary - expense;
        setValues({ ...values, expense: expense, saving: saving });
      }
    }
  };
  //Salaray change handler
  const handleChange = () => event => {
    let value = event.target.value;
    if (!isNaN(value)) {
      let salary = value;
      let expense = (salary * percent) / 100;
      let saving = salary - expense;
      setValues({ salary: salary, expense: expense, saving: saving });
    } else {
      setValues({
        ...values,
        salary: value,
        errormessage: "Invalid Salary! Number Only"
      });
    }
  };
  //#endregion

  return (
    <>
      <div className="container">
        <Typography center className="header">
          Expense Percentage
        </Typography>
        <Slider
          defaultValue={15}
          getAriaValueText={percentageChange}
          aria-labelledby="discrete-slider-always"
          min={1}
          max={30}
          step={1}
          marks={marks}
          valueLabelDisplay="on"
        />
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-amount">Salary</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={values.salary}
            onChange={handleChange("salary")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
          <FormHelperText error id="component-helper-text">
            {values.errormessage}
          </FormHelperText>
        </FormControl>
        <div className="output">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Expense"
              value={"$ " + values.expense}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="output">
          <FormControl fullWidth>
            <TextField
              width="100%"
              id="outlined-basic"
              label="Saving"
              value={"$ " + values.saving}
              variant="outlined"
            />
          </FormControl>
        </div>
      </div>
    </>
  );
};
export default Budget;
