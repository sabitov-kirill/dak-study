const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    id: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    name: {type:String, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    isOnline: {type: Boolean},
    groupList: {type: [String]}
})

module.exports = model('User', UserSchema);