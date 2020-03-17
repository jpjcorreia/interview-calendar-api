import {
  generateAvailableTimeSlots,
  getAvailableTimeSlots,
  intersectEntitiesTimeSlotRanges
} from "../util";
/**
 * Base Time Slots for an Interview Service
 */
class InterviewTimeSlotsService {
  constructor(candidateModel, interviewerModel) {
    this.candidateModel = candidateModel;
    this.interviewerModel = interviewerModel;
    this.get = this.get.bind(this);
  }
  /**
   * Retrieves the available time slots for an interview.
   * @param candidateId - Id of the candidate
   * @param interviewersIds - Id or Ids of the interviewers
   * @returns Object with data, status code and error flag
   */
  async get(candidateId, interviewersIds) {
    try {
      let availableTimeSlots = [];
      const candidate = await this.candidateModel
        .findById(candidateId)
        .populate("availability_slots");

      if (!candidate) {
        return {
          error: true,
          statusCode: 404,
          message: "Candidate not found."
        };
      }
      const candidateTimeSlotsRanges = getAvailableTimeSlots(candidate);

      if (Array.isArray(interviewersIds)) {
        let interviewersCommonSlotRanges = [];
        let temp = [];
        for (let index = 0; index < interviewersIds.length; index += 1) {
          const interviewerId = interviewersIds[index];
          const interviewer = await this.interviewerModel
            .findById(interviewerId)
            .populate("availability_slots");

          if (interviewer && interviewersCommonSlotRanges.length === 0) {
            /* get first interview slots, since it's the first one it's common between all of them */
            interviewersCommonSlotRanges = getAvailableTimeSlots(interviewer);
            continue;
          }
          if (interviewer) {
            /* get interviewer time slots */
            const interviewerTimeSlotsRanges = getAvailableTimeSlots(
              interviewer
            );

            /* save temporary array with common time slots between the one currently being processed and the common time slots
             * of the previous interviewers  */
            temp = intersectEntitiesTimeSlotRanges(
              interviewersCommonSlotRanges,
              interviewerTimeSlotsRanges
            );

            if (temp.length > 0) {
              /* any common time slot should be saved in the "main" array and used for the next processing. */
              interviewersCommonSlotRanges.length = 0;
              Array.prototype.push.apply(interviewersCommonSlotRanges, temp);
            }
          }
        }
        const commonTimeSlotsRanges = intersectEntitiesTimeSlotRanges(
          candidateTimeSlotsRanges,
          interviewersCommonSlotRanges
        );
        availableTimeSlots = generateAvailableTimeSlots(
          commonTimeSlotsRanges,
          "hourly"
        );
      } else {
        const interviewer = await this.interviewerModel
          .findById(interviewersIds)
          .populate("availability_slots");

        if (!interviewer) {
          return {
            error: false,
            statusCode: 200,
            availableTimeSlots
          };
        }

        const interviewerTimeSlotsRanges = getAvailableTimeSlots(interviewer);
        const commonTimeSlotsRanges = intersectEntitiesTimeSlotRanges(
          candidateTimeSlotsRanges,
          interviewerTimeSlotsRanges
        );
        availableTimeSlots = generateAvailableTimeSlots(
          commonTimeSlotsRanges,
          "hourly"
        );
      }
      return {
        error: false,
        statusCode: 200,
        availableTimeSlots
      };
    } catch (error) {
      console.error(
        "An error occurred while generating available time slots.",
        error
      );
      return {
        error: true,
        statusCode: 500,
        message: "Unable to generate time slots.",
        errors: error.errors
      };
    }
  }
}

export default InterviewTimeSlotsService;
