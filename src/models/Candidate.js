import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
/**
 * Candidate model for persisting in the database
 */
class Candidate {
  /**
   * Inits the mongoDb schema for this entity
   */
  initSchema() {
    const schema = new Schema(
      {
        fullname: {
          type: String,
          required: true
        },
        email: {
          type: String,
          index: true,
          required: true,
          unique: true
        },
        availability_slots: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "candidateAvailabilities"
          }
        ]
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("candidates", schema);
  }

  /**
   * Gets an instance of this model
   * @param init - flag should init schema or not
   */
  getInstance(init = true) {
    init && this.initSchema();
    return mongoose.model("candidates");
  }
}

export default Candidate;
