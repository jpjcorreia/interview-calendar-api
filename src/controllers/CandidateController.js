import Controller from "./Controller";
import CandidateService from "../services/CandidateService";
import Candidate from "../models/Candidate";

const candidateService = new CandidateService(new Candidate().getInstance());

class CandidateController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new CandidateController(candidateService);