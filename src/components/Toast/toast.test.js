import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Toast from "./index.jsx";

describe("Toast component", () => {
  test("Renders with message and close after 5 seconds", async () => {
    jest.useFakeTimers();
    const message = "فرمت ایمیل صحیح نیست.";
    const { getByText, queryByText } = render(
      <Toast
        message={message}
        showToast={true}
        onClose={() => {}}
        toastState="warning"
      />
    );

    const toastElement = getByText(message);
    expect(toastElement).toBeInTheDocument();

    jest.advanceTimersByTime(5000);

    await waitFor(() => {
      const closedToast = queryByText(message);
      expect(closedToast).not.toBeInTheDocument();
    });
  });

  test("Renders a warning toast with a warning icon", () => {
    const message = "نام کاربری یا رمز ورودی صحیح نمی باشد.";
    const { container } = render(
      <Toast
        message={message}
        showToast={true}
        onClose={() => {}}
        toastState="warning"
      />
    );

    const warningIcon = container.querySelector(".icon");
    expect(warningIcon).toBeInTheDocument();
  });

  test("Renders a success toast with a checkmark icon", () => {
    const message = "با موفقیت انجام شد!";
    const { container } = render(
      <Toast
        message={message}
        showToast={true}
        onClose={() => {}}
        toastState="success"
      />
    );

    const checkmarkIcon = container.querySelector(".icon");
    expect(checkmarkIcon).toBeInTheDocument();
  });
});
