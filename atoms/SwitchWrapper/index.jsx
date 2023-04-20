import React, { useId } from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import { ErrorMessage, useField, useFormikContext } from "formik";

const SwitchWrapper = ({ name, label, legend,disabled,color,autoFocus, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const id = useId()
  const handleChange = (event) => {
    setFieldValue(name, event.target.checked);
  };
  
  // props config for Switch
  const configSwitch = {
    onChange: handleChange,
    ...field,
    helperText:<ErrorMessage name={name}/>,
    size: "small",
    id: id,
    disabled: disabled,
    autoFocus: autoFocus,
    color:color,
    ...otherProps
  };
  // props config for FormControl
  const configFormControl = {};
  
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }
  
  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch {...configSwitch} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default SwitchWrapper;
