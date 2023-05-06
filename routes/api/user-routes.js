//set up code for express.js
const router = require('express').Router();

//import functionality and hook it up with the routes
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller')

//set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

//set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//add friend /api/users/:userId/friends/:friendID
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);
    
module.exports = router;