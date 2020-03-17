/**
 * Base Availability Controller
 */
class AvailabilityController {
  constructor(service) {
    this.service = service;
    this.insert = this.insert.bind(this);
  }

  /**
   * Provides a bridge and handles the communication part for the Insert operation on Availability for accessing the database.
   * @param request - HTTP request argument to the middleware
   * @param response - HTTP response argument to the middleware
   * @returns Object with data, status code and error flag
   */
  async insert(request, response) {
    const { id } = request.params;
    const insertResponse = await this.service.insert(id, request.body);

    if (insertResponse.error) {
      return response.status(insertResponse.statusCode).send(insertResponse);
    }

    return response.status(201).send(insertResponse);
  }
}

export default AvailabilityController;
