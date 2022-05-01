const mongoose = require('mongoose');

const URL = 'mongodb+srv://aluno:aluno123@clusterarquiteturaweb.7bpmq.mongodb.net/tessera?retryWrites=true&w=majority'

mongoose.connect(URL)

module.exports = mongoose