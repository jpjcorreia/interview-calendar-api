import mongoose from 'mongoose';

class Service {

    constructor(model) {
        this.model = model;
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(query) {
        let {skip, limit} = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 0;

        delete query.skip;
        delete query.limit;

        if (query._id){
            try {
                query._id = new mongoose.mongo.ObjectID(query._id);
            } catch  (error) {
                console.error("An error occurred while generating mongoose id.", query._id);
            }
        }

        try {
            let items = await this.model.find(query).skip(skip).limit(limit);
            let total = await this.model.countDocuments();

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


    async insert(data) {
        try {
            let item = await this.model.create(data);

            if (item)
            {
                return {
                    error: false,
                    item
                };
            }
        } catch (error) {
            console.error("An error occurred while inserting data.", error);
            return {
                error : true,
                statusCode : 500,
                message: error.errmsg || "Unable to create item.",
                errors: error.errors
            };
        }
    }

    async update (id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, {new: true});
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            console.error("An error occurred while updating data.", error);
            return {
                error : true,
                statusCode : 500,
                message: error.errmsg || "Unable to update item.",
                errors: error.errors
            };
        }
    }

    async delete (id)  {
        try {
            let item = await this.model.findByIdAndDelete(id);

            if (!item) {
                return {
                    error: true,
                    statusCode: 404,
                    message: "Item not found"
                };
            }
        } catch (e) {
            console.error("An error occurred while deleting data.", e);
            return {
                error: true,
                message: e.errmsg || "Unable to delete item.",
                statusCode: 500,
                e
            };
        }
    }
}

export default Service;