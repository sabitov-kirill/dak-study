const TestsService = require('../services/test-service')

class TestController {
    create(request, result) {
        try {
            const { name, description, questions, maxPassCount } = request.body;
            TestsService.create(name, description, questions, maxPassCount);

            result.status(200);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    addUserResult(request, result) {
        try {
            const { userId, testResult, testName } = request.body;
            TestsService.addUserResult(userId, testResult, testName);

            result.status(200);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    getUserResult(request, result) {
        try {
            const { userId, testName } = request.body;
            const testResult = TestsService.getUserResult(userId, testName);

            result.status(200).send(testResult);
        } catch (e) {
            result.status(400).send(e);
        }
    }
}

module.exports = new TestController();