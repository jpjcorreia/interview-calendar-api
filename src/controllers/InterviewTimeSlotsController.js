import Interviewer from "../models/Interviewer";
import Candidate from "../models/Candidate";
import InterviewTimeSlotsService from "../services/InterviewTimeSlotsService";
/**
 * InterviewTimeSlotsController bridge with respective service
 */
class InterviewTimeSlotsController {
  constructor() {
    this.get = this.get.bind(this);
  }

  /**
   * Provides a bridge and handles the communication part for the Get operation for generating available time slots for an interview.
   * @param request - HTTP request argument to the middleware
   * @param response - HTTP response argument to the middleware
   * @returns JSON response
   */
  async get(request, response) {
    const { id } = request.params;
    const interviewersIds = request.query.interviewer_id;
    const service = new InterviewTimeSlotsService(
      new Candidate().getInstance(false),
      new Interviewer().getInstance(false)
    );

    const getResponse = await service.get(id, interviewersIds);

    return response.status(getResponse.statusCode).send(getResponse);
  }
}

export default new InterviewTimeSlotsController();
