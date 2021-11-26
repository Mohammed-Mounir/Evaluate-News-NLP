import { checkValidUrl } from "../js/checkValidUrl";

describe("Test checkValidUrl functionality", () => {
  test("Check if checkValidUrl function is defined", () => {
    expect(checkValidUrl()).toBeDefined();
  });

  test("Check if a valid http url returns true", () => {
    expect(checkValidUrl("https://www.google.com/")).toBeTruthy();
  });

  test("Check if a invalid http url returns false", () => {
    expect(checkValidUrl("www.google.com/")).toBeFalsy();
  });
});
