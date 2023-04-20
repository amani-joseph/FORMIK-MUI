import PasswordAdornment from "@/atoms/TextFieldWrapper/PasswordAdornment";
import { InputAdornment } from "@mui/material";
import React, { useId, useState } from "react";
import TextField from "@mui/material/TextField";
import { useField, ErrorMessage, Field } from "formik";

const TextFieldWrapper = (
	{
	name,
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
	const [visibility, setVisibility] = useState(false);
	const id = useId()
	const typeChangeHandler = () => {
		console.log("@CHNGE TYPE");
		setVisibility((prev) => !prev);
	};
	
	

	const configTextField = {
		name: name,
		// ...field,
		fullWidth: true,
		type: type !== "password" ? type : visibility ? "text" : "password",
		label: label,
		placeholder: label,
		size: "small",
		id: id,
		disabled: disabled,
		autoFocus: autoFocus,
		variant: "outlined",
		multiline: multiline,
		select: select,
		helperText:<ErrorMessage name={name}/>,
		InputLabelProps: {
			shrink: true,
		},
		InputProps:{
		startAdornment: (
			<InputAdornment position="start">
				{startAdornment}
			</InputAdornment>
		),
			endAdornment: (
			<InputAdornment
				position="end"
				onClick={typeChangeHandler}
				sx={{ cursor: "pointer" }}
			>
				{endAdornment ? <PasswordAdornment /> : null}
			</InputAdornment>
		),
	},
		...restProps,
	};

	return (
		
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

export default TextFieldWrapper;
