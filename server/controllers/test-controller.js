const testService = require('../services/test-service');
const TestsService = require('../services/test-service')

class TestController {
    async create(request, result) {
        try {
            const { theme, name, description, difficulty, questions } = JSON.parse(request.body);
            await TestsService.create(theme, name, description, difficulty, questions);

            result.status(200).send({ isSuccses: true });
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async getList(request, result) {
        try {
            const { theme } = JSON.parse(request.body);
            const testsList = await TestsService.getByTheme(theme);

            result.status(200).send(JSON.stringify(testsList));
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async getQuestions(request, result) {
        try {
            const { id } = JSON.parse(request.body);
            const test = await TestsService.getById(id);
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

    async checkAnswers(request, result) {
        try {
            const { userId: id } = request.cookies;
            const { answers, id } = JSON.parse(request.body);
            const checkedAnswers = await TestsService.checkAnswers(answers, id);

            result.status(200).send(JSON.stringify(checkedAnswers));
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async addUserResult(request, result) {
        try {
            const { userId, testResult, testName } = JSON.parse(request.body);
            await TestsService.addUserResult(userId, testResult, testName);

            result.status(200).send({ isSuccses: true });
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async getUserResult(request, result) {
        try {
            const { userId, testName } = JSON.parse(request.body);
            const testResult = await TestsService.getUserResult(userId, testName);

            result.status(200).send(testResult);
        } catch (e) {
            result.status(400).send(e);
        }
    }
}

module.exports = new TestController();