import axios from "axios";
import { postData } from "./postInfo.js";

jest.mock("axios");
describe("postData function", () => {
  it("should return data when status is 200", async () => {
    const info = { email: "m_roknabadpou@shatel.ir", password: "Mobina1324" };

    const responseData = {
      email: "m_roknabadpou@shatel.ir",
      password: "Mobina1324",
    };

    const response = { status: 200, data: responseData };
    axios.post.mockResolvedValue(response);

    const result = await postData(info);
    expect(result).toEqual(responseData);
  });

it("should handle errors gracefully", async () => {
    const info = { email: "test@example.com", password: "password123" };
    const errorMessage = "Request failed with status code 404";
    axios.post.mockRejectedValue(new Error(errorMessage));
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  
    try {
      await postData(info);
    } catch (error) {
      expect(consoleErrorSpy).toHaveBeenCalled(errorMessage);
    }
    consoleErrorSpy.mockRestore();
  });
  
});
