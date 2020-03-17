import { isExactHour, isValidHourlyPeriod } from "../util/date";

describe("isExactHour()", () => {
  it("should return true", () => {
    const input = "2020-12-04T14:00:00.000Z";
    expect(isExactHour(input)).toEqual(true);
  });
  it("should return false", () => {
    const input = "2020-12-04T14:11:00.000Z";
    expect(isExactHour(input)).toEqual(false);
  });
  it("should return false", () => {
    const input = "ajghkagkan";
    expect(isExactHour(input)).toEqual(false);
  });
});
describe("isValidHourlyPeriod()", () => {
  it("should return true", () => {
    const startDate = "2020-12-04T14:00:00.000Z";
    const endDate = "2020-12-04T18:00:00.000Z";
    expect(isValidHourlyPeriod(startDate, endDate)).toEqual(true);
  });
  it("should return false, periods are the same", () => {
    const startDate = "2020-12-04T14:00:00.000Z";
    const endDate = "2020-12-04T14:00:00.000Z";
    expect(isValidHourlyPeriod(startDate, endDate)).toEqual(false);
  });
  it("should return false, not hourly block", () => {
    const startDate = "2020-12-04T14:00:00.000Z";
    const endDate = "2020-12-04T18:30:00.000Z";
    expect(isValidHourlyPeriod(startDate, endDate)).toEqual(false);
  });
  it("should return false, periods are in the past", () => {
    const startDate = "2018-12-04T14:00:00.000Z";
    const endDate = "2018-12-04T18:30:00.000Z";
    expect(isValidHourlyPeriod(startDate, endDate)).toEqual(false);
  });
  it("should return false, start date is after end date", () => {
    const startDate = "2018-12-05T14:00:00.000Z";
    const endDate = "2018-12-04T18:30:00.000Z";
    expect(isValidHourlyPeriod(startDate, endDate)).toEqual(false);
  });
});