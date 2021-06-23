const { Schema, model } = require('mongoose');

const GroupSchema = new Schema({
    /* Group name */
    name: { type: String, unique: true, required: true },

    /* Privacy status */
    isPublic: { type: Boolean, required: true },

    /* Group password need to join group if its private */
    password: { type: String },

    /* User id, wich can be used to get user data */
    usersId: { type: [Number] }
});

module.exports = model('Group', GroupSchema);