import { ErrorMessage, Formik } from "formik";
import {
  StyledButton,
  StyledErrorText,
  StyledField,
  StyledForm,
  StyledLabel,
} from "./ContactForm.styled";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const contactSchema = Yup.object({
  name: Yup.string().max(32).required(),
  number: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .required(),
});

const inintialValues = {
  name: "",
  number: "",
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <StyledErrorText>{message}</StyledErrorText>}
    />
  );
};

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={inintialValues}
      onSubmit={(contact, { resetForm }) => {
        contact.id = nanoid();
        console.log(contact);
        addContact(contact);
        resetForm();
      }}
      validationSchema={contactSchema}
    >
      <StyledForm autoComplete="off">
        <StyledLabel>Name</StyledLabel>
        <StyledField type="text" name="name"></StyledField>
        <FormError name="name" />
        <StyledLabel>Number</StyledLabel>
        <StyledField type="tel" name="number"></StyledField>
        <FormError name="number" />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Formik>
  );
};
