export const checkValidLoginForm = (email, password, name) => {
  const isEmailValid =
    /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid =
    /(?:.*(?:(?:[A-Z].*(?:[0-9].*[a-z]|[a-z].*[0-9]))|(?:[a-z].*(?:[A-Z].*[0-9]|[0-9].*[A-Z]))|(?:[0-9].*(?:[A-Z].*[a-z]|[a-z].*[A-Z]))).*)/.test(
      password
    );
  const isNameValid = name?.trim()?.length > 0;
  if (!isNameValid) return "Please enter a proper name";
  if (!isEmailValid) return "Email is incorrect";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};
