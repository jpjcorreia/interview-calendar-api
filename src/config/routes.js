import CandidateController from "../controllers/CandidateController";
import CandidateAvailabilityController from "../controllers/CandidateAvailabilityController";
import InterviewerController from "../controllers/InterviewerController";
import {
  availabilityValidationRules,
  candidateValidationRules,
  interviewerValidationRules,
  interviewTimeSlotsValidationRules,
  validate
} from "../util/validator";
import InterviewerAvailabilityController from "../controllers/InterviewerAvailabilityController";
import InterviewTimeSlotsController from "../controllers/InterviewTimeSlotsController";
/**
 * Handles the routes on express middleware
 */
export default server => {
  server.get(`/v1/candidates`, CandidateController.getAll);
  server.get(`/v1/candidates/:id`, CandidateController.get);
  server.post(
    `/v1/candidates`,
    candidateValidationRules(),
    validate,
    CandidateController.insert
  );
  server.post(
    `/v1/candidates/:id/availability`,
    availabilityValidationRules(),
    validate,
    CandidateAvailabilityController.insert
  );
  server.put(`/v1/candidates/:id`, CandidateController.update);
  server.delete(`/v1/candidates/:id`, CandidateController.delete);

  server.get(`/v1/interviewers`, InterviewerController.getAll);
  server.get(`/v1/interviewers/:id`, InterviewerController.get);
  server.post(
    `/v1/interviewers`,
    interviewerValidationRules(),
    validate,
    InterviewerController.insert
  );
  server.post(
    `/v1/interviewers/:id/availability`,
    availabilityValidationRules(),
    validate,
    InterviewerAvailabilityController.insert
  );
  server.put(`/v1/interviewers/:id`, InterviewerController.update);
  server.delete(`/v1/interviewers/:id`, InterviewerController.delete);

  server.get(
    `/v1/candidates/:id/interview_time_slots`,
    interviewTimeSlotsValidationRules(),
    validate,
    InterviewTimeSlotsController.get
  );
};
