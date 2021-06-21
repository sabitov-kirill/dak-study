const { validationResult } = require('express-validator');

class UserController {
    async login(request, result) {
        try {
            if (!validationResult(request).isEmpty()) {
                throw new Error("Request validation error.");
            }

            const { email, password } = request.body;
            console.log("New user logged in.");
            /* const userData = await get from DB;
            result.send(userData); */
        } catch (e) {
            console.log(e);
        }
    }

    async register(request, result) {
        try {
            if (!validationResult(request).isEmpty()) {
                throw new Error("Request validation error.");
            }

            const { email, password } = request.body;
            console.log("New user reistered.");
            /* const userData await get from DB;
            result.send(userData); */
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController();