import CandidateAvailabilityService from "../services/CandidateAvailabilityService";
import Candidate from "../models/Candidate";
import AvailabilityController from "./AvailabilityController";
import Availability from "../models/Availability";

const candidateAvailabilityService = new CandidateAvailabilityService(
  new Availability().getInstance(true, true),
  new Candidate().getInstance(false)
);
/**
 * Base CandidateAvailabilityController
 */
class CandidateAvailabilityController extends AvailabilityController {
  constructor(service) {
    super(service);
  }
}

export default new CandidateAvailabilityController(
  candidateAvailabilityService
);
