const TestModel = require('../models/test-model');

class TestService {
    async create(theme, name, description, difficulty, questions) {
        await TestModel.create({
            theme,
            name,
            description,
            difficulty,
            questions
        })
            .then(null, (error) => {
                if (error.code === 11000) {
                    throw new Error(`Test with name "${name}" already exist.`)
                } else {
                    throw error;
                }
            });
    }

    async getByTheme(theme) {
        const tests = await TestModel.find({ theme });
        if (!tests || tests.length == 0) throw new Error(`Tests with theme ${theme} not found.`);

        const testsList = tests.map((test) => {
            return {
                name: test.name,
                description: test.description,
                difficulty: test.difficulty,
                id: test._id
            };
        });
        return testsList;
    }

    async getById(id) {
        const test = await TestModel.findOne({ _id: id });
        if (!test) throw new Error(`Test with id ${id} not found.`);

        return test;
    }

    async checkAnswers(answers, id) {
        let rightAns = 0;
        const test = await this.getById(id);
        if (!test) throw new Error(`Test with id ${id} not found.`);

        // Checking answers
        const checkedAnswers = test.questions.map((question, index) => {
            if (answers[index] === question.answer) {
                rightAns++;
                return { inputIndex: answers[index], isCorrect: true }
            } else {
                return { inputIndex: answers[index], isCorrect: false, correctIndex: question.answer };
            }
        });

        return { checkedAnswers, result: Math.ceil(rightAns / test.questions.length * 100) };
    }

    async addUserResult(userId, result, testName) {
        const test = await TestModel.findOne({ name: testName });
        if (!test) throw new Error(`Test with name ${testName} not found.`);

        // Key should be string. Probably error.
        let results = test.usersResult.get(userId);
        if (results) results.push(result);
        else results = [result];

        test.usersResult.set(userId, results);
        test.save();
    }

    async getUserResult(userId, testName) {
        const test = await TestModel.findOne({ name: testName });
        if (!test) throw new Error(`Test with name ${testName} not found.`);

        let results = test.usersResult.get(userId);
        if (!results) throw new Error(`User with id ${userId} not found in list of passed uesers.`);
        else return results;
    }
}

module.exports = new TestService();