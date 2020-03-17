import Controller from "./Controller";
import InterviewerService from "../services/InterviewerService";
import Interviewer from "../models/Interviewer";

const interviewerService = new InterviewerService(
  new Interviewer().getInstance()
);
/**
 * InterviewerController
 */
class InterviewerController extends Controller {
  constructor(service) {
    super(service);
  }
}

export default new InterviewerController(interviewerService);
