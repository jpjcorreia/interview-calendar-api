import { body, param, query, validationResult } from "express-validator";
/**
 * Validates body parameters for availability request.
 */
export function availabilityValidationRules() {
  return [
    body("time_slot")
      .exists()
      .isArray({ min: 1 })
      .withMessage("A time slot must be sent."),
    body("time_slot.*.start_date")
      .isISO8601({ strict: true })
      .withMessage("Must contain a valid ISO8601 date."),
    body("time_slot.*.end_date")
      .isISO8601({ strict: true })
      .withMessage("Must contain a valid ISO8601 date."),
    param("id")
      .isMongoId()
      .withMessage("Must contain a valid Id.")
  ];
}
/**
 * Validates body parameters for candidate request.
 */
export function candidateValidationRules() {
  return [
    body("email")
      .notEmpty()
      .isEmail()
      .bail()
      .normalizeEmail()
      .withMessage("Must be a valid email."),
    body("fullname")
      .notEmpty()
      .isLength({ min: 3 })
      .trim()
      .escape()
  ];
}
/**
 * Validates body parameters for interview request.
 */
export function interviewerValidationRules() {
  return [
    body("fullname")
      .notEmpty()
      .isLength({ min: 3 })
      .trim()
      .escape(),
    body("email")
      .notEmpty()
      .isEmail()
      .bail()
      .normalizeEmail()
      .withMessage("Must be a valid email."),
    body("phone")
      .notEmpty()
      .isMobilePhone("any", { strictMode: true }),
    body("main_department")
      .notEmpty()
      .isIn(["hr", "it", "admin"])
      .withMessage("Must have a valid department.")
  ];
}
/**
 * Validates body parameters for get interview time slots request.
 */
export function interviewTimeSlotsValidationRules() {
  return [
    param("id")
      .isMongoId()
      .withMessage("Must contain a valid candidate Id."),
    query("interviewer_id")
      .isMongoId()
      .withMessage("Must be a valid interviewer id.")
  ];
}
/**
 * Generic validate method that concats all the validation errors and outputs JSON response.
 * @param req - HTTP request argument to the middleware
 * @param res - HTTP response argument to the middleware
 * @param next - Callback argument to the middleware
 * @returns JSON response with errors
 */
export function validate(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    error: true,
    statusCode: 422,
    errors: extractedErrors
  });
}
