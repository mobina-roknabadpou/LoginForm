import axios from "axios";
import { notifySuccess, notifyError } from "../components/Notify/notify";

export const postData = async (info) => {
  try {
    const { data, status } = await axios.post(
      "https://www.namava.ir/api/v1.0/accounts/login/by-email",
      info,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (status === 200) {
      if (!data.succeeded) {
        const { code, message } = data.error;
        if (code === 10002) {
          console.log(message);
        } else if (code === 10602) {
          notifyError("نام کاربری یا رمز ورودی صحیح نمی باشد.");
        }
        return;
      }
      notifySuccess("با موفقیت انجام شد!");
    } else if (status === 429) {
      notifyError(
        "استفاده بیش از اندازه از این امکان مجاز نیست دوباره مجددا امتحان کنید!"
      );
    }
  } catch (err) {
    console.log(err);
  }
};
