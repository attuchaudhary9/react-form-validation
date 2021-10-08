export default function validation(values) {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  //Email varification
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!values.email.trim()) {
    errors.email = "Email required";
  } 
  else if (!values.email.match(validRegex)) {
    errors.email = "Invalid email";
  }

  //Password varification

  if(!values.password){

    errors.password = "Password is required"
  }else if (values.password.length > 6){
      errors.password = "Password must be at least 6 characters"
  }

  //Confirm Password

  if(!values.password2){
      errors.password2 = "Confirmation of password is required"
  }else if(values.password2 !== values.password){
      errors.password2 = "Confirm password is not match with actual password "
  }
}
