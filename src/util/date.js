import moment from "moment";
/**
 * Validates if date has an exact hour (eg: 14:00)
 * @param dateToCheck - date to be checked
 * @returns boolean true if is a valid date, false otherwise
 */
export function isExactHour(dateToCheck) {
  const date = moment(dateToCheck, moment.ISO_8601);

  if (
    date.minutes() === 0 &&
    date.seconds() === 0 &&
    date.milliseconds() === 0
  ) {
    return true;
  }

  return false;
}

/**
 * Validates if is a valid hourly period in the future.
 * @param startDate - Start date
 * @param endDate - End date
 * @returns boolean true if is a valid period, false otherwise
 */
export function isValidHourlyPeriod(startDate, endDate) {
  const sDate = moment(startDate, moment.ISO_8601);
  const eDate = moment(endDate, moment.ISO_8601);

  if (
    sDate.isValid() &&
    eDate.isValid() &&
    sDate.isAfter(moment()) &&
    eDate.isAfter(moment()) &&
    isExactHour(sDate) &&
    isExactHour(eDate)
  ) {
    const duration = moment.duration(eDate.diff(sDate)).asHours();
    /* A positive integer means that exact duration in hours, to prevent invalid values and start date is equal to end date */
    if (Number.isInteger(duration) && duration > 0) {
      return true;
    }
  }

  return false;
}
/**
 * Validates if periods are valid hourly periods and with correct ISO8601 format.
 * @param timeSlots - Periods to be validated
 * @returns boolean true if all periods are valid, false otherwise
 */
export function validatePeriods(timeSlots) {
  if (Array.isArray(timeSlots) === false || timeSlots.length <= 0) {
    return false;
  }

  for (let i = 0; i < timeSlots.length; i += 1) {
    const isValid = isValidHourlyPeriod(
      timeSlots[i].start_date,
      timeSlots[i].end_date
    );
    if (!isValid) {
      return false;
    }
  }
  return true;
}
