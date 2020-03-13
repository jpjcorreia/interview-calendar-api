import Controller from "./Controller";
import CandidateAvailabilityService from "../services/CandidateAvailabilityService";
import CandidateAvailability from "../models/CandidateAvailability";

const candidateAvailabilityService = new CandidateAvailabilityService(new CandidateAvailability().getInstance());

class CandidateAvailabilityController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new CandidateAvailabilityController(candidateAvailabilityService);