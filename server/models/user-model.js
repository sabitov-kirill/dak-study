const { Schema, model } = require('mongoose');

const TestResultsSchema = new Schema({
    testId: { type: String },
    testName: { type: String },
    results: { type: [Number] }
});

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
    groupsNames: { type: [String] },

    /* User tests results */
    testsResults: { type: [TestResultsSchema] }
});

module.exports = model('User', UserSchema);