export const Validater = (email, password) => {
  const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordR =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  console.log(emailR, passwordR);

  if (!emailR && !passwordR) {
    return "Email and password not valid";
  } else if (!emailR) {
    return "Email not valid";
  } else if (!passwordR) {
    return "Password not valid";
  } else {
    return null;
  }
};
