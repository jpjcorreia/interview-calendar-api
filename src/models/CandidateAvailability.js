import mongoose, { Schema} from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class CandidateAvailability {

    initSchema()
    {
        const schema = new Schema({
            time_slot: [{
                start_date: {type: Date, required: true},
                end_date: {type: Date, required: true},
            }],

        }, { timestamps: true});

        schema.plugin(uniqueValidator);
        mongoose.model("candidateAvailabilities", schema);
    }

    getInstance(){
        this.initSchema();
        return mongoose.model("candidateAvailabilities");
    }
}

export default CandidateAvailability;