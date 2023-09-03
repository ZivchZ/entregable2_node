const { getAll, createUser, getOneUser, remove, update } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
		.post(createUser)

userRouter.route("/:id")
		.get(getOneUser)
		.delete(remove)
		.put(update)

module.exports = userRouter;