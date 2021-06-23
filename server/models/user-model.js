const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    /* Unique user id. Public user data can be get by that */
    id: { type: String, unique: true, required: true },

    /* Email */
    email: { type: String, unique: true, required: true },

    /* Name + Last Name */
    name: { type: String, required: true },

    /* Password */
    password: { type: String, required: true },

    /* User activation status. WIP */
    isActivated: { type: Boolean, default: false },

    /* Online status */
    isOnline: { type: Boolean },

    /* Users group list */
    groupsNames: { type: Map, of: Number }
});

module.exports = model('User', UserSchema);