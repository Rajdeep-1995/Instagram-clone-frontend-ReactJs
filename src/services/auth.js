import axios from "axios";

export const sendOTVC = async (emailOrPhoneNumber) => {
  return await axios.post(`${process.env.REACT_APP_API}/auth/otvc`, {
    emailOrPhoneNumber,
  });
};

export const validateOTVC = async (emailOrPhoneNumber, otvc) => {
  return await axios.post(`${process.env.REACT_APP_API}/auth/validate-otvc`, {
    emailOrPhoneNumber,
    otvc,
  });
};

export const registerUser = async (
  emailOrPhoneNumber,
  fullName,
  userName,
  password,
  birthDay
) => {
  return await axios.post(`${process.env.REACT_APP_API}/auth/register`, {
    emailOrPhoneNumber,
    fullName,
    userName,
    password,
    birthDay,
  });
};

export const signIn = async (phoneNumberOrEmailOrUsername, password) => {
  return await axios.post(`${process.env.REACT_APP_API}/auth/signin`, {
    phoneNumberOrEmailOrUsername,
    password,
  });
};

export const checkExistingField = async (phoneNumberOrEmailOrUsername) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/auth/check-existing-data/${phoneNumberOrEmailOrUsername}`
  );
};

export const authenticate = (authResponse) => {
  if (typeof window != undefined) {
    sessionStorage.setItem("auth", JSON.stringify(authResponse));
  }
};

export const isAuthenticated = () => {
  if (typeof window === undefined || false) {
    return false;
  } else {
    if (sessionStorage.getItem("auth")) {
      return JSON.parse(sessionStorage.getItem("auth"));
    } else {
      return false;
    }
  }
};

export const signOut = () => {
  if (typeof window !== undefined) {
    sessionStorage.removeItem("jwt");
  }
};
