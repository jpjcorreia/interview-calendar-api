/**
 * Base Controller that makes a bridge with a Service
 */
class Controller {
  constructor(service) {
    this.service = service;
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  /**
   * Provides a bridge and handles the communication part for the Get All operation for accessing the database.
   * @param request - HTTP request argument to the middleware
   * @param response - HTTP response argument to the middleware
   * @returns JSON response
   */
  async getAll(request, response) {
    return response.status(200).send(await this.service.getAll(request.query));
  }

  /**
   * Provides a bridge and handles the communication part for the Get operation for accessing the database.
   * @param request - HTTP request argument to the middleware
   * @param response - HTTP response argument to the middleware
   * @returns JSON response
   */
  async get(request, response) {
    const { id } = request.params;
    const getResponse = await this.service.get(id);
    return response.status(getResponse.statusCode).send(getResponse);
  }

  /**
   * Provides a bridge and handles the communication part for the Insert operation for accessing the database.
   * @param request - HTTP request argument to the middleware
   * @param response - HTTP response argument to the middleware
   * @returns JSON response
   */
  async insert(request, response) {
    const insertResponse = await this.service.insert(request.body);

    if (insertResponse.error) {
      return response.status(insertResponse.statusCode).send(insertResponse);
    }

    return response.status(201).send(insertResponse);
  }

  /**
   * Provides a bridge and handles the communication part for the Update operation for accessing the database.
   * @param request - HTTP request argument to the middleware
   * @param response - HTTP response argument to the middleware
   * @returns JSON response
   */
  async update(request, response) {
    const { id } = request.params;
    const updateResponse = await this.service.update(id, request.body);
    return response.status(updateResponse.statusCode).send(updateResponse);
  }

  /**
   * Provides a bridge and handles the communication part for the Delete operation for accessing the database.
   * @param request - HTTP request argument to the middleware
   * @param response - HTTP response argument to the middleware
   * @returns JSON response
   */
  async delete(request, response) {
    const { id } = request.params;
    const deleteResponse = await this.service.delete(id, request.body);
    return response.status(deleteResponse.statusCode).send(deleteResponse);
  }
}

export default Controller;
