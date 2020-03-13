import mongoose, { Schema} from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


class Candidate {

    initSchema()
    {
        const schema = new Schema({
            fullname: {
                type: String,
                required: false,
            },
            email: {
                type: String,
                index: true,
            },
            availability_slots: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "candidateAvailabilities"
                }
            ]
        }, { timestamps: true});

        schema.plugin(uniqueValidator);
        mongoose.model("candidates", schema);
    }

    getInstance(){
        this.initSchema();
        return mongoose.model("candidates");
    }
}

export default Candidate;