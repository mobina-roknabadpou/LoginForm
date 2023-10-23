import axios from "axios";

export const postData = async (info, showToastNotification, setIsLoading) => {
  setIsLoading(true)
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
    setIsLoading((prev) => !prev);
    if (status === 200) {
      if (!data.succeeded) {
        const { code, message } = data.error;
        if (code === 10002) {
          console.log(message);
          showToastNotification("فرمت ایمیل صحیح نیست.", true);
        } else if (code === 10602) {
          showToastNotification("نام کاربری یا رمز ورودی صحیح نمی باشد.", true);
        }
        return;
      }
      showToastNotification("با موفقیت انجام شد!", false);
    } else if (status === 429) {
      showToastNotification(
        "استفاده بیش از اندازه از این امکان مجاز نیست دوباره مجددا امتحان کنید!",
        true
      );
    }
  } catch (err) {
    console.log(err);
  }
};
