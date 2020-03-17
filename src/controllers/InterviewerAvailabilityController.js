import AvailabilityController from "./AvailabilityController";
import InterviewerAvailabilityService from "../services/InterviewerAvailabilityService";
import Availability from "../models/Availability";
import Interviewer from "../models/Interviewer";

const interviewerAvailabilityService = new InterviewerAvailabilityService(
  new Availability().getInstance(false, false),
  new Interviewer().getInstance(false)
);
/**
 * Base InterviewerAvailabilityController
 */
class InterviewerAvailabilityController extends AvailabilityController {
  constructor(service) {
    super(service);
  }
}

export default new InterviewerAvailabilityController(
  interviewerAvailabilityService
);
