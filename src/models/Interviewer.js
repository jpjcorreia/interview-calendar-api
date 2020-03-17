import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
/**
 * Interviewer model for persisting in the database
 */
class Interviewer {
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
        phone: {
          type: String,
          required: true
        },
        main_department: {
          type: String,
          enum: ["hr", "it", "admin"],
          required: true
        },
        availability_slots: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "interviewerAvailabilities"
          }
        ]
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("interviewers", schema);
  }

  /**
   * Gets an instance of this model
   * @param init - flag should init schema or not
   */
  getInstance(init = true) {
    init && this.initSchema();
    return mongoose.model("interviewers");
  }
}

export default Interviewer;
