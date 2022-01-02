const mongoose = require('mongoose');

const macSchema = new mongoose.Schema({
    MAC : {
        type: String
    },
    IP : {
        type: String
    },
    IPv6 : {
        type: String
    },
    DTime : {
        type: String
    }
})

const Mac = new mongoose.model('Mac', macSchema);

module.exports = Mac;