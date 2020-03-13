class Controller {

    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(request, response, next) {
        response.status(200).send(await this.service.getAll(request.query));
        next();
    }

    async get(request, response, next) {
        let getResponse = await this.service.get(request.params)
        response.status(getResponse.statusCode).send(getResponse);
        next();
    }

    async insert (request, response, next) {
        let insertResponse = await this.service.insert(request.body);

        if (insertResponse.error){
            response.status(insertResponse.statusCode).send(insertResponse);
            next(insertResponse.error);
        }

        response.status(201).send(insertResponse);
        next();

    }

    async update (request, response, next) {
        const { id } = request.params;
        let updateResponse = await this.service.update(id, request.body);
        response.status(updateResponse.statusCode).send(updateResponse);
        next();
    }

    async delete (request, response, next) {
        const { id } = request.params;
        let deleteResponse = await this.service.delete(id, request.body);
        response.status(deleteResponse.statusCode).send(deleteResponse);
        next();
    }

}

export default Controller;