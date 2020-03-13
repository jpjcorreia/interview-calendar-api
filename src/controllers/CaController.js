import CaService from "../services/CaService";
import CandidateAvailability from "../models/CandidateAvailability";
import Candidate from "../models/Candidate";

const caService = new CaService(new CandidateAvailability().getInstance());

class CaController {

    constructor(service) {
        this.service = service;
        this.insert = this.insert.bind(this);
    }

    async insert (request, response, next) {
        const { id } = request.params;
        let insertResponse = await this.service.insert(id, request.body);
        console.log(insertResponse);
        if (insertResponse.error){
            response.status(insertResponse.statusCode).send(insertResponse);
            next(insertResponse.error);
        }

        response.status(201).send(insertResponse);
        next();

    }

}

export default new CaController(caService);