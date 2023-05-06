# Social Network API

## Description:
- This project is an API for a social network app using MongoDB for the backend.  Users can create a friend list, create thoughts, and react to friend's thoughts.  Express.js is used for the route, MongoDB for database, and Mongoose ODM

## Installation
Run the following for installation:
- Clone repository onto your local computer.  

## Instruction:
In the command line interface, enter 'npm install' to install the package dependencies.  Then enter 'npm start' to run the server.  Go to Insomnia to view the routes.
#### Endpoints:
```
User
    - Get all users:    GET /api/users
    - Create a user:    POST /api/users
    - Get user by id:   GET /api/users:id
    - Update a user:    PUT /api/users/:id
    - Delete a user:    DELETE /api/users/:id
    - Add a friend:     POST /api/users/:userId/friends/:friendId
    - Delete a friend:  DELETE /api/users/:userId/friends/:friendId

```
```
Thought
    - Get all thoughts:  GET /api/thoughts
    - Create a thought:  POST /api/thoughts
    - Get thought by ID: GET /api/thoughts/:id
    - Update a thought:  PUT /api/thoughts/:id
    - Delete a thought:  DELETE /api/thoughts/:id
```
```
Reaction
    - Add a reaction:    PUT /api/thoughts/:id/reactions
    - Delete a reaction: DELETE /api/thoughts/:thoughtId/:reactionId
```

## Video Link Walkthrough 
[youtube link](https://youtu.be/VTCalpkDnvM)



## Link to GitHub:
[GitHub](https://github.com/Qaizen/social-network-api)