import { InputAdornment, MenuItem } from "@mui/material";
import React, { useId, useState } from "react";
import TextField from "@mui/material/TextField";
import { useField, ErrorMessage, Field } from "formik";

const SelectFieldWrapper = (
  {
    name,options,
    type,
    label,
    variant,
    haveTooltip,
    tooltipText,
    multiline,
    required,
    error,
    helperText,
    select,
    selectItem,
    startAdornment,
    endAdornment,
    onChange,
    onBlur,
    shrink,
    disabled,
    autoFocus,
    ...restProps
  }

) => {
  
  const id = useId();
  
  const configTextField = {
    name: name,
    fullWidth: true,
    type: "text"|| "number" ,
    label: label,
    placeholder: label,
    size: "small",
    id: id,
    disabled: disabled,
    autoFocus: autoFocus,
    variant: "outlined",
    multiline: multiline,
    select: "select",
    helperText:<ErrorMessage name={name}/>,
    InputLabelProps: {
      shrink: true,
    },
    InputProps:{
      startAdornment: (
        <InputAdornment position="start">
          {startAdornment}
        </InputAdornment>
      )},
    ...restProps,
  };
  
  
  return (
    
    <Field name={name}>
      {
        ({
           field, // { name, value, onChange, onBlur }
           form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
           meta,
         })=>(
          <TextField {...field}
                     {...form}
                     {...configTextField}
                     error={meta.touched && meta.error}
          >
          {options.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </TextField>
        )
      }
    </Field>
  );

};

export default SelectFieldWrapper;

