import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
/**
 * Availability model for persisting in the database
 */
class Availability {
  /**
   * Inits the mongoDb schema for this entity
   * @param isCandidate - flag that states if is interviewer or candidate
   */
  initSchema(isCandidate) {
    const schema = new Schema(
      {
        time_slot: [
          {
            start_date: { type: Date, required: true },
            end_date: { type: Date, required: true }
          }
        ]
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);

    if (isCandidate) {
      mongoose.model("candidateAvailabilities", schema);
    }

    mongoose.model("interviewerAvailabilities", schema);
  }

  /**
   * Gets an instance of this model
   * @param init - flag should init schema or not
   * @param isCandidate - flag that states if is interviewer or candidate
   */
  getInstance(init = true, isCandidate = true) {
    init && this.initSchema(isCandidate);

    if (isCandidate) {
      return mongoose.model("candidateAvailabilities");
    }

    return mongoose.model("interviewerAvailabilities");
  }
}

export default Availability;
