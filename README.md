<h1 align="center">Welcome to interview-calendar-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Interview calendar REST API assignment using express and mongoose.

### 🏠 [Homepage](https://gitlab.com/ki-group-pt/xgeekshq/assignments/be-assignment-jcorreia/-/blob/master/README.md)

## Pre-requisites

* [Node.js (LTS 12.x)](https://nodejs.org/en/)
* IDE Suggestions: [Visual Studio Code](https://code.visualstudio.com/), [WebStorm](https://www.jetbrains.com/webstorm/)

## Install

The first time, you will need to run:

```sh
npm install
```

## COPY .env.example to .env

```sh
cp .env.example .env
```

## Usage

Start the server:

```sh
npm run start
```

## Usage in development mode

Start the server in the development mode. It uses nodemon for live reloading.

```sh
npm run dev:start
```

## Run tests

```sh
npm run test
```

## Package list

| Package | Description             |
| :---------- | :---------------------- |
| dotenv         | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env                    |
| express         | Fast, unopinionated, minimalist web framework for node               |
| moment         | A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates              |
| mongoose         | Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment            |
| express-validator          | Set of express.js middlewares that wraps validator.js validator and sanitizer functions           |
| ESLint          | A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript           |
| Prettier          | An opinionated code formatter           |

## REST API

This API is used to get a collection of periods of time when it’s possible to arrange an interview for a particular candidate and one or more interviewers.
All the endpoints return the JSON representation of the resources created or edited.
The following section describes the main operations.

#### GET Candidates

Retrieves all the candidates.

**Endpoint**

```http
GET /v1/candidates/
```

**Response**

<details>
  <summary>Sample</summary>

```javascript
{
    "error": false,
    "statusCode": 200,
    "data": [
        {
            "availability_slots": [
                {
                    "_id": "5e6c2e79dc115a01a07c8bbe",
                    "time_slot": [
                        {
                            "_id": "5e6c2e79dc115a01a07c8bbf",
                            "start_date": "2020-03-16T14:00:00.000Z",
                            "end_date": "2020-03-16T15:00:00.000Z"
                        },
                        {
                            "_id": "5e6c2e79dc115a01a07c8bc0",
                            "start_date": "2020-03-16T18:00:00.000Z",
                            "end_date": "2020-03-16T19:00:00.000Z"
                        }
                    ],
                    "createdAt": "2020-03-14T01:08:09.073Z",
                    "updatedAt": "2020-03-14T01:08:09.073Z",
                    "__v": 0
                },
                {
                    "_id": "5e6c2ee3dc115a01a07c8bc1",
                    "time_slot": [
                        {
                            "_id": "5e6c2ee3dc115a01a07c8bc2",
                            "start_date": "2020-03-17T14:00:00.000Z",
                            "end_date": "2020-03-17T15:00:00.000Z"
                        },
                        {
                            "_id": "5e6c2ee3dc115a01a07c8bc3",
                            "start_date": "2020-03-18T13:00:00.000Z",
                            "end_date": "2020-03-18T15:00:00.000Z"
                        }
                    ],
                    "createdAt": "2020-03-14T01:09:55.768Z",
                    "updatedAt": "2020-03-14T01:09:55.768Z",
                    "__v": 0
                },
                {
                    "_id": "5e6c57002de2b70c88661cd6",
                    "time_slot": [
                        {
                            "_id": "5e6c57002de2b70c88661cd7",
                            "start_date": "2020-05-17T14:00:00.000Z",
                            "end_date": "2020-03-17T15:00:00.000Z"
                        },
                        {
                            "_id": "5e6c57002de2b70c88661cd8",
                            "start_date": "2020-03-18T13:00:00.000Z",
                            "end_date": "2020-03-18T15:00:00.000Z"
                        }
                    ],
                    "createdAt": "2020-03-14T04:01:04.713Z",
                    "updatedAt": "2020-03-14T04:01:04.713Z",
                    "__v": 0
                }
            ],
            "_id": "5e6c2c2970052916b42ef744",
            "fullname": "Pedro Correia",
            "email": "ola@gmail.com",
            "createdAt": "2020-03-14T00:58:17.035Z",
            "updatedAt": "2020-03-14T04:01:04.719Z",
            "__v": 0
        },
        {
            "availability_slots": [
                {
                    "_id": "5e6e15fd730c1730c8398b10",
                    "time_slot": [
                        {
                            "_id": "5e6e15fd730c1730c8398b11",
                            "start_date": "2020-03-16T16:00:00.000Z",
                            "end_date": "2020-03-16T17:00:00.000Z"
                        },
                        {
                            "_id": "5e6e15fd730c1730c8398b12",
                            "start_date": "2020-03-19T11:00:00.000Z",
                            "end_date": "2020-03-19T13:00:00.000Z"
                        },
                        {
                            "_id": "5e6e15fd730c1730c8398b13",
                            "start_date": "2020-03-21T14:00:00.000Z",
                            "end_date": "2020-03-21T15:00:00.000Z"
                        },
                        {
                            "_id": "5e6e15fd730c1730c8398b14",
                            "start_date": "2020-03-23T10:00:00.000Z",
                            "end_date": "2020-03-23T18:00:00.000Z"
                        }
                    ],
                    "createdAt": "2020-03-15T11:48:13.226Z",
                    "updatedAt": "2020-03-15T11:48:13.226Z",
                    "__v": 0
                },
                {
                    "_id": "5e6e16fbf7fc8d1428907d04",
                    "time_slot": [
                        {
                            "_id": "5e6e16fbf7fc8d1428907d05",
                            "start_date": "2020-03-16T16:00:00.000Z",
                            "end_date": "2020-03-16T17:00:00.000Z"
                        },
                        {
                            "_id": "5e6e16fbf7fc8d1428907d06",
                            "start_date": "2020-03-19T11:00:00.000Z",
                            "end_date": "2020-03-19T13:00:00.000Z"
                        },
                        {
                            "_id": "5e6e16fbf7fc8d1428907d07",
                            "start_date": "2020-03-21T14:00:00.000Z",
                            "end_date": "2020-03-21T15:00:00.000Z"
                        },
                        {
                            "_id": "5e6e16fbf7fc8d1428907d08",
                            "start_date": "2020-03-29T10:00:00.000Z",
                            "end_date": "2020-03-29T18:00:00.000Z"
                        }
                    ],
                    "createdAt": "2020-03-15T11:52:27.707Z",
                    "updatedAt": "2020-03-15T11:52:27.707Z",
                    "__v": 0
                }
            ],
            "_id": "5e6e144a730c1730c8398b08",
            "fullname": "Miguel Pereira",
            "email": "miguelpereira@gmail.com",
            "createdAt": "2020-03-15T11:40:58.501Z",
            "updatedAt": "2020-03-15T11:52:27.714Z",
            "__v": 0
        }
    ],
    "total": 2
}
```
</details>

#### POST Candidates

Creates a new candidate.

**Endpoint**

```http
POST /v1/candidates/
```

**Request**

```javascript
{
    "fullname": "Joao Correia Teste",
    "email": "joaocorreiatest@gmail.com"
}
```

**Response**

<details>
  <summary>Sample</summary>

```javascript
{
    "error": false,
    "statusCode": 201,
    "item": {
        "availability_slots": [],
        "_id": "5e6fc2c3e6c53932f4af2d94",
        "fullname": "Joao Correia Teste",
        "email": "joaocorreiatest@gmail.com",
        "createdAt": "2020-03-16T18:17:39.117Z",
        "updatedAt": "2020-03-16T18:17:39.117Z",
        "__v": 0
    }
}
```
</details>

#### POST Candidates Availability

Creates a candidate availability.

**Endpoint**

```http
POST /v1/candidates/:id/availability
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
|     :id      |  string    |  Candidate id (MongoDB - ObjectId)           |

**Request**

```javascript
{
	"time_slot": [
		{
			"start_date": "2020-03-20T16:00:00.000Z",
			"end_date": "2020-03-20T17:00:00.000Z"
		},
		{
			"start_date": "2020-03-21T11:00:00.000Z",
			"end_date": "2020-03-21T13:00:00.000Z"
		}
	]
}
```

**Response**

<details>
  <summary>Sample</summary>
  
```javascript
{
    "error": false,
    "item": {
        "_id": "5e6fc54fe6c53932f4af2d95",
        "time_slot": [
            {
                "_id": "5e6fc54fe6c53932f4af2d96",
                "start_date": "2020-03-20T16:00:00.000Z",
                "end_date": "2020-03-20T17:00:00.000Z"
            },
            {
                "_id": "5e6fc54fe6c53932f4af2d97",
                "start_date": "2020-03-21T11:00:00.000Z",
                "end_date": "2020-03-21T13:00:00.000Z"
            }
        ],
        "createdAt": "2020-03-16T18:28:31.760Z",
        "updatedAt": "2020-03-16T18:28:31.760Z",
        "__v": 0
    }
}
```

</details>

#### GET Interviewers

Retrieves all the interviewers.

**Endpoint**

```http
GET /v1/interviewers/
```

**Response**

<details>
  <summary>Sample</summary>

```javascript
{
    "error": false,
    "statusCode": 200,
    "data": [
        {
            "availability_slots": [
                {
                    "_id": "5e6d50e90155403270c38f7d",
                    "time_slot": [
                        {
                            "_id": "5e6d50e90155403270c38f7e",
                            "start_date": "2020-05-17T10:00:00.000Z",
                            "end_date": "2020-03-17T18:00:00.000Z"
                        },
                        {
                            "_id": "5e6d50e90155403270c38f7f",
                            "start_date": "2020-03-18T12:00:00.000Z",
                            "end_date": "2020-03-18T17:00:00.000Z"
                        }
                    ],
                    "createdAt": "2020-03-14T21:47:21.357Z",
                    "updatedAt": "2020-03-14T21:47:21.357Z",
                    "__v": 0
                }
            ],
            "_id": "5e6d1537e2df361ac0467d14",
            "fullname": "Joaquim Rodrigues",
            "email": "teste@gmail.com",
            "phone": "+351919860229",
            "main_department": "it",
            "createdAt": "2020-03-14T17:32:39.315Z",
            "updatedAt": "2020-03-14T21:47:21.396Z",
            "__v": 0
        },
        {
            "availability_slots": [
                {
                    "_id": "5e6e1574730c1730c8398b0b",
                    "time_slot": [
                        {
                            "_id": "5e6e1574730c1730c8398b0c",
                            "start_date": "2020-03-16T10:00:00.000Z",
                            "end_date": "2020-03-16T18:00:00.000Z"
                        },
                        {
                            "_id": "5e6e1574730c1730c8398b0d",
                            "start_date": "2020-03-19T10:00:00.000Z",
                            "end_date": "2020-03-19T13:00:00.000Z"
                        },
                        {
                            "_id": "5e6e1574730c1730c8398b0e",
                            "start_date": "2020-03-20T14:00:00.000Z",
                            "end_date": "2020-03-20T15:00:00.000Z"
                        },
                        {
                            "_id": "5e6e1574730c1730c8398b0f",
                            "start_date": "2020-03-23T13:00:00.000Z",
                            "end_date": "2020-03-23T16:00:00.000Z"
                        }
                    ],
                    "createdAt": "2020-03-15T11:45:56.763Z",
                    "updatedAt": "2020-03-15T11:45:56.763Z",
                    "__v": 0
                }
            ],
            "_id": "5e6e14b1730c1730c8398b0a",
            "fullname": "Mariana Sousa",
            "email": "marianarodrigues@gmail.com",
            "phone": "+351919860229",
            "main_department": "hr",
            "createdAt": "2020-03-15T11:42:41.376Z",
            "updatedAt": "2020-03-15T11:45:56.767Z",
            "__v": 0
        },
        {
            "availability_slots": [
                {
                    "_id": "5e6eb88e5938c11ec85d7473",
                    "time_slot": [
                        {
                            "_id": "5e6eb88e5938c11ec85d7474",
                            "start_date": "2020-03-23T10:00:00.000Z",
                            "end_date": "2020-03-23T18:00:00.000Z"
                        }
                    ],
                    "createdAt": "2020-03-15T23:21:50.059Z",
                    "updatedAt": "2020-03-15T23:21:50.059Z",
                    "__v": 0
                }
            ],
            "_id": "5e6eb8175938c11ec85d7472",
            "fullname": "Naria João",
            "email": "mariajoao@gmail.com",
            "phone": "+351919860229",
            "main_department": "hr",
            "createdAt": "2020-03-15T23:19:51.282Z",
            "updatedAt": "2020-03-15T23:21:50.062Z",
            "__v": 0
        }
    ],
    "total": 3
}
```
</details>

#### POST Interviewers

Creates a new interviewer.

**Endpoint**

```http
POST /v1/interviewers/
```

**Request**

```javascript
{
    "fullname": "Maria João",
    "email": "maria.ss@gmail.com",
    "phone": "+351919111111",
    "main_department": "it"
}
```

**Response**

<details>
  <summary>Sample</summary>

```javascript
{
    "error": false,
    "item": {
        "availability_slots": [],
        "_id": "5e6fc96ba59d3204d834ad34",
        "fullname": "Maria João",
        "email": "mariass@gmail.com",
        "phone": "+351919111111",
        "main_department": "it",
        "createdAt": "2020-03-16T18:46:03.108Z",
        "updatedAt": "2020-03-16T18:46:03.108Z",
        "__v": 0
    }
}
```
</details>

#### POST Interviewer Availability

Creates a interviewer availability.

**Endpoint**

```http
POST /v1/candidates/:id/availability
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
|     :id      |  string    |  Interviewer id (MongoDB - ObjectId)           |

**Request**

```javascript
{
	"time_slot": [
		{
			"start_date": "2020-03-23T12:00:00.000Z",
			"end_date": "2020-03-23T18:00:00.000Z"
		}
	]
}
```

**Response**

<details>
  <summary>Sample</summary>
  
```javascript
{
    "error": false,
    "item": {
        "_id": "5e6fc9d4a59d3204d834ad35",
        "time_slot": [
            {
                "_id": "5e6fc9d4a59d3204d834ad36",
                "start_date": "2020-03-23T12:00:00.000Z",
                "end_date": "2020-03-23T18:00:00.000Z"
            }
        ],
        "createdAt": "2020-03-16T18:47:48.918Z",
        "updatedAt": "2020-03-16T18:47:48.918Z",
        "__v": 0
    }
}
```

</details>

#### GET Interview Time Slots

Gets the available 1 hour time slots for an8 interview for the candidate and the specified interviewers.

**Endpoint**

```http
GET /v1/candidates/:id/interview_time_slots?interviewer_id=xxx&interviewer_id=xxx
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
|     :id      |  string    |  Candidate id (MongoDB - ObjectId)           |
|     interviewer_id      |  string    |  Interviewer id (MongoDB - ObjectId)           |

**Request**

```javascript

```

**Response**

<details>
  <summary>Sample</summary>
  
```javascript
{
    "error": false,
    "statusCode": 200,
    "availableTimeSlots": [
        {
            "start": "2020-03-16T16:00:00.000Z",
            "end": "2020-03-16T17:00:00.000Z"
        },
        {
            "start": "2020-03-19T11:00:00.000Z",
            "end": "2020-03-19T12:00:00.000Z"
        },
        {
            "start": "2020-03-19T12:00:00.000Z",
            "end": "2020-03-19T13:00:00.000Z"
        },
        {
            "start": "2020-03-23T13:00:00.000Z",
            "end": "2020-03-23T14:00:00.000Z"
        },
        {
            "start": "2020-03-23T14:00:00.000Z",
            "end": "2020-03-23T15:00:00.000Z"
        }
    ]
}
```

</details>

## Status Codes

This API returns the following status codes:

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 202         | `ACCEPTED`              |
| 204         | `NO CONTENT`            |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

## Author

👤 **Joao Correia**

- Twitter: [@jpjcorreia](https://twitter.com/jpjcorreia)
- LinkedIn: [@jpjcorreia](https://linkedin.com/in/jpjcorreia)

## 🤝 Contributing

Contributions are welcome!<br />Feel free to check [contributing page](https://gitlab.com/ki-group-pt/xgeekshq/assignments/be-assignment-jcorreia/-/blob/develop/interview-calendar-api/CONTRIBUTING.md).

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
