import { InputAdornment } from "@mui/material";
import React, { useId, useState } from "react";
import TextField from "@mui/material/TextField";
import { useField, ErrorMessage, Field } from "formik";

const DateTimeWrapper = (
  {
    name,
    label,
    variant,
    haveTooltip,
    tooltipText,
    required,
    error,
    onChange,
    onBlur,
    shrink,
    disabled,
    autoFocus,
    ...restProps
  }

) => {
  const [field, meta, helpers] = useField(name);
  const id = useId()
  
  const configTextField = {
    name: name,
    // ...field,
    fullWidth: true,
    type: "date",
    label: label,
    placeholder: label,
    size: "small",
    id: id,
    disabled: disabled,
    autoFocus: autoFocus,
    variant: "outlined",
    helperText:<ErrorMessage name={name}/>,
    InputLabelProps: {
      shrink: true,
    },
    ...restProps,
  };
  
  return (
    // <TextField  {...configTextField} />
    <Field name={name}>
      {
        ({
           field, // { name, value, onChange, onBlur }
           form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
           meta,
         }) => (
          <div>
            <TextField {...field}
                       {...form}
                       {...configTextField}
                       error={meta.touched && meta.error}
            
            
            />
          
          </div>
        )
      }
    </Field>
  )
};

export default DateTimeWrapper;
