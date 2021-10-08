export default function validation(values) {
  console.log(values);
  let errors = {};
  if (!values.username) {
    errors.username = "Username required";
  }

  //email validation

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) {
    errors.email = "Email required";
  } else if (!re.test(String(values.email).toLowerCase())) {
    errors.email = "Invalid email";
  }

  //Password varification

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  //Confirm Password

  if (!values.password2) {
    errors.password2 = "Confirmation of password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Confirm password is not match with actual password ";
  }

  return errors;
}
