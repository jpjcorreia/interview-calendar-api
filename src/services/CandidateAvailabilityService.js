import { validatePeriods } from "../util/date";

/**
 * Candidate availability service
 */
class CandidateAvailabilityService {
  constructor(candidateAvailabilityModel, candidateModel) {
    this.candidateAvailabilityModel = candidateAvailabilityModel;
    this.candidateModel = candidateModel;
  }

  /**
   * insert method.
   * @param id - Id of the candidate
   * @param data - Data to persist in the database
   * @returns Object with data, status code and error flag
   */
  async insert(id, data) {
    try {
      const timeSlots = data.time_slot;
      const allPeriodsAreValid = validatePeriods(timeSlots);

      if (!allPeriodsAreValid) {
        return {
          error: true,
          statusCode: 400,
          message: "Request contains an invalid period."
        };
      }

      const item = await this.candidateAvailabilityModel.create(data);
      if (item) {
        await this.candidateModel.findOneAndUpdate(
          { _id: id },
          // eslint-disable-next-line no-underscore-dangle
          { $push: { availability_slots: item._id } },
          { new: true, useFindAndModify: false }
        );

        await this.candidateModel.findById(id).populate("availability_slots");

        return {
          error: false,
          item
        };
      }
    } catch (error) {
      console.error("An error occurred while inserting data.", error);
      return {
        error: true,
        statusCode: 500,
        message: error || "Unable to create item.",
        errors: error.errors
      };
    }
  }
}

export default CandidateAvailabilityService;
