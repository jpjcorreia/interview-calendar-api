import Candidate from "../models/Candidate";

class CaService {
    constructor(model) {
        this.model = model;
    }

    async insert(id, data) {
        try {
            let item = await this.model.create(data);
            if (item)
            {

                await Candidate.schema.findOneAndUpdate({ _id: id }, {$push: {availability_slots: item._id}}, { new: true });
                await Candidate.schema.populate("availability_slots");

                return {
                    error: false,
                    item
                };
            }

        } catch (error) {
            console.error("An error occurred while inserting data.", error);
            return {
                error : true,
                statusCode : 500,
                message: error.errmsg || "Unable to create item.",
                errors: error.errors
            };
        }
    }

}

export default CaService;