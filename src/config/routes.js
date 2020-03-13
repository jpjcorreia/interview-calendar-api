import CandidateController from "../controllers/CandidateController";
import CaController from "../controllers/CaController";

export default (server) => {

    server.get(`/v1/candidate`, CandidateController.getAll);
    server.get(`/v1/candidate/:params`, CandidateController.get);
    server.post(`/v1/candidate`, CandidateController.insert);
    server.put(`/v1/candidate/:id`, CandidateController.update);
    server.delete(`/v1/candidate/:id`, CandidateController.delete);
    server.post(`/v1/candidate/:id/availability`, CaController.insert);
}