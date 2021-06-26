const { Schema, model } = require('mongoose');

const TestSchema = new Schema({
    /* Test theme */
    theme: { type: String, required: true },

    /* Test name */
    name: { type: String, unique: true, required: true },

    /* Test description */
    description: { type: String },

    /* Test difficulty */
    difficulty: { type: String },

    /* Test questions stringyfied to JSON.
     * Text: question text.
     * Options: options text.
     * Answer: Right option.
     */
    questions: {
        type: {
            text: { type: String },
            options: { type: [String] },
            answer: { type: String }
        }
    },

    /* People, who passed test stringyfied to JSON.
     * Id: id of user;
     * Marks: user marks list;
     */
    usersResults: {
        type: {
            id: String,
            Marks: [Number]
        }
    }
});

module.exports = model('Test', TestSchema);