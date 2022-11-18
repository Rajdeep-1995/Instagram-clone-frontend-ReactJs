import axios from "axios";

export const uploadProfilePhoto = async (formData, token) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/user/user-profile-upload`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
