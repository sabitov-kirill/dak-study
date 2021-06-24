const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const UserSchema = new Schema({
    /* Email */
    email: { type: String, unique: true, required: true },

    /* Name + Last Name */
    name: { type: String, required: true },

    /* Password */
    password: { type: String, required: true },

    /* User status */
    status: { type: String, default: 'Student' },

    /* User activation status. WIP */
    isActivated: { type: Boolean, default: false },

    /* Online status */
    isOnline: { type: Boolean },

    /* Users group list */
    groupsNames: { type: Map, of: Number, get: (groupsMap) => {
        let values = [], i = 0;
        groupsMap.forEach((value, group) => {
            values[i++] = group;
        });
        return values;
    } }
});

module.exports = model('User', UserSchema);