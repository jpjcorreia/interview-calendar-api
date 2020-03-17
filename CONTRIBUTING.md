## Contributing to this project

The following is a set of guidelines and how this API is organized.

## Project structure

```bash
.
 │   index.js
 │
 ├───config 
 │       config.js
 │       database.js
 │       routes.js
 │       server.js
 │
 ├───controllers
 │       AvailabilityController.js
 │       CandidateAvailabilityController.js
 │       CandidateController.js
 │       Controller.js
 │       InterviewerAvailabilityController.js
 │       InterviewerController.js
 │       InterviewTimeSlotsController.js
 │
 ├───models
 │       Availability.js
 │       Candidate.js
 │       Interviewer.js
 │
 ├───services
 │       CandidateAvailabilityService.js
 │       CandidateService.js
 │       InterviewerAvailabilityService.js
 │       InterviewerService.js
 │       InterviewTimeSlotsService.js
 │       Service.js
 │
 ├───tests
 │   │   date.test.js
 │   │   sample.test.js
 │   │
 │   └───testdata
 │           candidate.json
 │
 └───util
         date.js
         index.js
         validator.js
```
This project uses a simple layer approach in order to separate HTTP, Business and Data Access logic. 

![alt text](https://i.imgur.com/ia7s3Gm.png "Logo Title Text 1")

| Main Layer | Type | Logic |
| :-------- | :--- | :---------- |
|     HTTP Logic Layer     |  Routes + Controllers    |  Routes - handle the HTTP requests that hits the API, apply an initial validation, and route them to the controller; Controllers - take request object, pulls data from request then send to service         |
|     Business Logic Layer     |  Services + Data Access    |  Contains the business logic and how access the database.         |

## Development

* This project uses ES6 modules, compiled with the help of `babel`.
* All dates will be accepted in ISO 8601 format.
* In order to catch errors early and save some work from the Controllers, requests are early validated/sanitized using `express-validator` and validating functions "injected" in the server routes.  

## Style guides

### Code style and linting

This project uses the code style from `prettier` and uses `eslint` and the airbnb (`eslint-config-airbnb-base`) rule set as a base.

