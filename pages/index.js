import CheckboxWrapper from "@/atoms/CheckBoxWrapper";
import DateTimeWrapper from "@/atoms/DateTimePickerWrapper";
import SelectFieldWrapper from "@/atoms/SelectFiedWrapper";
import SwitchWrapper from "@/atoms/SwitchWrapper";
import FormikControl from "@/components/FormikControl";
import { Box, Typography, Grid, Button, Stack } from "@mui/material";
import TextFieldWrapper from "@/atoms/TextFieldWrapper";
import TextField from "@mui/material/TextField";
import { Formik, Form, isSubmitting } from "formik";
import { object, string, number, date, boolean } from "yup";
const states=[
	"Alabama",
	"Alaska",
	"American Samoa",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
]



const minDate = new Date();
minDate.setDate(minDate.getDate() - 1);
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 90);
const validationSchema = object({
	firstName: string().required("First name Required"),
	lastName: string().required("Last name Required"),
	email: string().email("Invalid email").required("Email required"),
	phone: number()
		.positive("The number must be positive")
		.integer("The number must be an integer")
		.typeError("Please enter a valid phone number")
		.required("Phone number required"),
	addressLine1: string().required("Address required"),
	addressLine2: string(),
	city: string().required("City required"),
	state: string().required("State required"),
	country: string().required("Country required"),
	arrivalDate: date()
		.required("Date of arrival required")
		.max(maxDate, "Reservation must be within 90 days")
		.min(minDate, "Cannot use past days"),
	departureDate: date()
		.required("Date of departure required")
		.max(maxDate, "Reservation must be within 90 days")
		.min(minDate, "Cannot use past days"),
	message: string(),
	onOffSwitch: boolean(),
	termsOfService: boolean()
		.oneOf([true], "The terms and conditions must be accepted.")
		.required("The terms and conditions must be accepted."),
});

const initialFormState = {
	firstName: "",
	lastName: "",
	password:"",
	email: "",
	phone: "",
	addressLine1: "",
	addressLine2: "",
	city: "",
	state: "",
	country: "",
	arrivalDate: "",
	departureDate: "",
	message: "",
	onOffSwitch: false,
	termsOfService: false,
};

export default function Home() {
	// actions = { setSubmitting, resetForm, isSubmitting }
	const submitHandler = (values, actions) => {
		setTimeout(() => {
			// setSubmitting not needed with async
			actions.setSubmitting(false);
			actions.resetForm(initialFormState);
			setOpen(true);
			console.log(values); // test
		}, 2000);
	};
	return (
		<Box sx={{ m: "3rem" }}>
			<Typography variant="h3" textAlign="center">
				Formik MUI
			</Typography>

			
				<Formik
					initialValues={initialFormState}
					validationSchema={validationSchema}
					onSubmit={submitHandler}>
					{({ values,isSubmitting,errors }) => <Form>
						<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Stack spacing={2} direction="column">
								<FormikControl
									control="input"
									name="firstName"
									label="First Name"
									type="text"
								/>
								<FormikControl
									control="input"
									name="lastName"
									label="Last Name"
									type="text"
								/>
								<FormikControl
									control="input"
									name="password"
									label="password"
									type="password"
									endAdornment
								/>
								<FormikControl
									control="input"
									name="phone"
									label="Phone"
									type="tel"
								/>
								
								<FormikControl
									control="select"
									name="state"
									label="State"
									type="text"
									options={states}
								/>
								
								<FormikControl
									control="datePicker"
									name="departureDate"
									label="Date of Departure"
								/>
								
								<FormikControl
									control="input"
									name="message"
									label="Message"
									multiline
									rows={5}
								/>
								
								<FormikControl
									control="switch"
									name="onOffSwitch"
									legend="On/Off switch"
									label="Choose light/dark theme"
									color="error"
								/>
								
								<FormikControl
									control="checkbox"
									name="termsOfService"
									// legend="Terms of Service"
									label="I agree"
								/>
							</Stack>
						</Grid>
						
						<Grid item xs={6} md={6}>
							<Box sx={{ color: "red" }}>
								<pre>{JSON.stringify(errors, null, 4)}</pre>
							</Box>
							<Box sx={{ color: "green" }}>
							<pre>{JSON.stringify(values, null, 4)}</pre>
							
							</Box>
						</Grid>
						<Grid item xs={12} >
							<Button type="submit" variant="contained"> Submit</Button>
						</Grid>
						</Grid>
					</Form>}
				</Formik>
				
			
			
			
		</Box>
	);
}
