const emailModel = require('../domain/models/email');


exports.create = async (req, res) => {
    await emailModel.create(req.body).then((emailModel) => {
        res.send(emailModel);
    });
};


exports.findAll = async (req, res) => {
    await emailModel.find({}).then((emailModel) => {
        res.send(emailModel);
    });
};

exports.findById = async (req, res) => {
    const { id } = req.params
    const foundEmail = await emailModel.findById(id)
    res.send(foundEmail)
}