const TestModel = require('../models/test-model');

class TestService {
    create(name, description, questions, maxPassCount) {
        TestModel.create({
            name,
            description,
            questions,
            maxPassCount
        })
            .then(null, (error) => {
                if (error.code === 11000) {
                    throw new Error(`Test with name "${name}" already exist.`)
                } else {
                    throw error;
                }
            });
    }

    addUserResult(userId, result, testName) {
        const test = TestModel.findOne({ name: testName });
        if (!test) throw new Error(`Test with name ${testName} not found.`);

        // Key should be string. Probably error.
        let results = test.usersResult.get(userId);
        if (results) results.push(result);
        else results = [result];

        test.usersResult.set(userId, results);
        test.save();
    }

    getUserResult(userId, testName) {
        const test = TestModel.findOne({ name: testName });
        if (!test) throw new Error(`Test with name ${testName} not found.`);

        let results = test.usersResult.get(userId);
        if (!results) throw new Error(`User with id ${userId} not found in list of passed uesers.`);
        else return results;
    }
}

module.exports = new TestService();