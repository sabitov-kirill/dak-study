class TestService {
    async create(theme, name, description, difficulty, questions) {
        let test_data = { theme, name, description, difficulty, questions }
        let result = await fetch("/req/test-create", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(test_data)
        });

        if (!result.ok) {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async getList(theme) {
        let test_data = { theme }
        let result = await fetch("/req/test-list", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(test_data)
        });

        if (result.ok) {
            let text = await result.text();
            return JSON.parse(text);
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async getQuestions(id) {
        let test_data = { id }
        let result = await fetch("/req/test-questions", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(test_data)
        });

        if (result.ok) {
            let text = await result.text();
            return JSON.parse(text);
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async checkAnswers(id, answers) {

    }
}

export default new TestService();