const testService = require('../services/test-service');
const TestsService = require('../services/test-service')

class TestController {
    create(request, result) {
        try {
            const { theme, name, description, difficulty, questions } = JSON.parse(request.body);
            TestsService.create(theme, name, description, difficulty, questions);

            result.status(200).send({ isSuccses: true });
        } catch (e) {
            result.status(400).send(e);
        }
    }

    getList(request, result) {
        try {
            const { theme } = JSON.parse(request.body);
            const testsList = TestsService.getByTheme(theme)
            const testsData = testsList.map((test) => {
                return {
                    name: test.name,
                    desription: test.desription,
                    difficulty: test.difficulty
                };
            });

            result.status(200).send(JSON.stringify(testsData));
        } catch (e) {
            result.status(400).send(e);
        }
    }

    getQuestions(request, result) {
        try {
            const { id } = JSON.parse(request.body);
            const test = TestsService.getById(id)
            const questionsData = test.questions.map((question) => {
                return {
                    text: question.text,
                    options: question.options
                };
            });

            result.status(200).send(JSON.stringify(questionsData));
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