import axios from "axios";

export const postData = async (info) => {
  try {
    const response = await axios.post(
      "https://www.namava.ir/api/v1.0/accounts/login/by-email",
      info,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { status, data } = response;
    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
