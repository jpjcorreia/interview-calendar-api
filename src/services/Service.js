import mongoose from "mongoose";
/**
 * Base CRUD service
 */
class Service {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  /**
   * Get all generic method to retrieve resources based on a mongoDB query.
   * @param query - Query to send
   * @returns Object with data, status code and error flag
   */
  async getAll(query) {
    let { skip, limit } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 0;

    delete query.skip;
    delete query.limit;

    // eslint-disable-next-line no-underscore-dangle
    if (query._id) {
      try {
        // eslint-disable-next-line no-underscore-dangle
        query._id = new mongoose.mongo.ObjectID(query._id);
      } catch (error) {
        console.error(
          "An error occurred while generating mongoose id.",
          query._id
        );
      }
    }

    try {
      const items = await this.model
        .find(query)
        .populate("availability_slots")
        .skip(skip)
        .limit(limit);
      const total = await this.model.countDocuments();

      return {
        error: false,
        statusCode: 200,
        data: items,
        total
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      };
    }
  }
  /**
   * Generic get method.
   * @param id - Resource id to find.
   * @returns Object with data, status code and error flag
   */
  async get(id) {
    try {
      const item = await this.model.findById(id).populate("availability_slots");

      if (item) {
        return {
          error: false,
          statusCode: 200,
          item
        };
      }
      return {
        error: true,
        statusCode: 404,
        message: "Resource not found."
      };
    } catch (error) {
      console.error("An error occurred while inserting data.", error);
      return {
        error: true,
        statusCode: 500,
        message: "Unable to create item.",
        errors: error.errors
      };
    }
  }

  /**
   * Generic insert method.
   * @param data - Data to persist in the database
   * @returns Object with data, status code and error flag
   */
  async insert(data) {
    try {
      const item = await this.model.create(data);

      if (item) {
        return {
          error: false,
          item
        };
      }
      return {
        error: true,
        statusCode: 400,
        message: "Unspecified error."
      };
    } catch (error) {
      console.error("An error occurred while inserting data.", error);
      return {
        error: true,
        statusCode: 500,
        message: "Unable to create item.",
        errors: error.errors
      };
    }
  }

  /**
   * Generic update method.
   * @param id - Id of the resource to be modified
   * @param data - Data to persist in the database
   * @returns Object with data, status code and error flag
   */
  async update(id, data) {
    try {
      const item = await this.model.findByIdAndUpdate(id, data, { new: true });
      return {
        error: false,
        statusCode: 202,
        item
      };
    } catch (error) {
      console.error("An error occurred while updating data.", error);
      return {
        error: true,
        statusCode: 500,
        message: "Unable to update item.",
        errors: error.errors
      };
    }
  }

  /**
   * Generic delete method.
   * @param id - Id of the resource to be deleted
   * @returns Object with data, status code and error flag
   */
  async delete(id) {
    try {
      const item = await this.model.findByIdAndDelete(id);

      if (!item) {
        return {
          error: true,
          statusCode: 404,
          message: "Item not found"
        };
      }
      return {
        error: false,
        statusCode: 204
      };
    } catch (e) {
      console.error("An error occurred while deleting data.", e);
      return {
        error: true,
        message: "Unable to delete item.",
        statusCode: 500,
        e
      };
    }
  }
}

export default Service;
