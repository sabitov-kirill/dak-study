const { Schema, model } = require('mongoose');

const TestSchema = new Schema({
    /* Test theme */
    theme: { type: String, required: true },

    /* Test name */
    name: { type: String, unique: true, required: true },

    /* Test description */
    description: { type: String },

    /* Group, connected to test name */
    groupName: { type: String, required: true },

    /* Test questions stringyfied to JSON */
    questions: { type: String },

    /* Max test passing count. If not set - 1 */
    maxPassCount: { type: Number },

    /* People, who passed test list.
     * Id: id of user;
     * Marks: user marks list;
     * passCount: count, wich shows how much times test passed by user.
     */
    usersResults: { type: Map, of: [Number] }
});

module.exports = model('Test', TestSchema);