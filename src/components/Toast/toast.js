import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toast from "./index.jsx";

describe("Toast component", () => {
  it("renders with 'warning' state", () => {
    render(<Toast message="Warning message" showToast={true} onClose={() => {}} toastState="warning" />);
    
    const toastContainer = screen.getByTestId("container");
    expect(toastContainer).toHaveClass("show");
    
    const warningIcon = screen.getByTestId("icon");
    expect(warningIcon).toBeInTheDocument();
    
    const messageText = screen.getByText("Warning message");
    expect(messageText).toBeInTheDocument();
  });

  it("renders with 'success' state", () => {
    render(<Toast message="Success message" showToast={true} onClose={() => {}} toastState="success" />);
    
    const toastContainer = screen.getByTestId("container");
    expect(toastContainer).toHaveClass("show");
    
    const checkmarkIcon = screen.getByTestId("checkmark-icon");
    expect(checkmarkIcon).toBeInTheDocument();
    
    const messageText = screen.getByText("Success message");
    expect(messageText).toBeInTheDocument();
  });

  it("closes after 5 seconds", () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
    render(<Toast message="Message" showToast={true} onClose={onClose} />);
    
    // Ensure toast is initially shown
    const toastContainer = screen.getByTestId("toast-container");
    expect(toastContainer).toHaveClass("show");
    
    // Fast-forward time by 5 seconds
    jest.advanceTimersByTime(5000);
    
    // Ensure onClose function is called after 5 seconds
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
