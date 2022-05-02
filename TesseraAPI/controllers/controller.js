const registerModel = require('../Domain/Models/register.js');


exports.create = (req, res) => {
    registerModel.create(req.body).then((registerModel) => {
        res.send(registerModel);
    });
};


exports.details = (req, res) => {
    registerModel.find({}).then((registerModel) => {
        res.send(registerModel);
    });
};