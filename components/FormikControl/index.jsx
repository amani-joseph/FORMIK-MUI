import CheckboxWrapper from "@/atoms/CheckBoxWrapper";
import DateTimeWrapper from "@/atoms/DateTimePickerWrapper";
import SelectFieldWrapper from "@/atoms/SelectFiedWrapper";
import SwitchWrapper from "@/atoms/SwitchWrapper";
import TextFieldWrapper from "@/atoms/TextFieldWrapper";
import React from 'react'

function FormikControl({control, ...rest}) {
  switch (control){
    case("input"):
      return <TextFieldWrapper {...rest}/>
    case("select"):
      return <SelectFieldWrapper  {...rest} />
    case("datePicker"):
      return <DateTimeWrapper {...rest} />
    case("switch"):
      return <SwitchWrapper {...rest} />
    case("checkbox"):
      return <CheckboxWrapper {...rest} />
    // case("autoComplete"):
    //   return <{...rest} />
    default:
      return <TextFieldWrapper {...rest}/>
  }
  
}

export default FormikControl