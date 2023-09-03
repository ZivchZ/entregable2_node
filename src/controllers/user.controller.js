const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const users = await User.findAll();
    return res.json(users)
});

const createUser = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.create({
        first_name,
        last_name,
        email,
        password,
        birthday
    })
    return res.status(201).json(user)
});

const getOneUser = catchError(async(req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    return res.json(user)
});

const remove = catchError(async(req, res) => {
    const {id} = req.params;
    await User.destroy({where: {id}})
    return res.sendStatus(204)
});

const update = catchError(async(req, res) => {
    const {id} = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const userModified = await User.update({
        first_name,
        last_name,
        email,
        password,
        birthday
    }, {where: {id}, returning: true})
    return res.json(userModified)
});

module.exports = {
    getAll,
    createUser,
    getOneUser,
    remove,
    update
}