const TestsService = require('../services/test-service')

class TestController {
    create(request, result) {
        try {
            const { name, description, questions, maxPassCount } = JSON.parse(request.body);
            TestsService.create(name, description, questions, maxPassCount);

            result.status(200);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    addUserResult(request, result) {
        try {
            const { userId, testResult, testName } = JSON.parse(request.body);
            TestsService.addUserResult(userId, testResult, testName);

            result.status(200);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    getUserResult(request, result) {
        try {
            const { userId, testName } = JSON.parse(request.body);
            const testResult = TestsService.getUserResult(userId, testName);

            result.status(200).send(testResult);
        } catch (e) {
            result.status(400).send(e);
        }
    }
}

module.exports = new TestController();