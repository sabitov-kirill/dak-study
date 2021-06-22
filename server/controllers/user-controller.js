const { validationResult } = require('express-validator');

const userService = require('../services/user-service')

class UserController {
    async login(request, result) {
        try {
            // Check for request errors
            if (!validationResult(request).isEmpty()) throw new Error("Request validation error.");

            // Getting registration data from body
            const { email, password } = JSON.parse(request.body);
            const user_data = await userService.login(email, password);

            // Return user data
            result.status(200).send(user_data);
        } catch (e) {
            console.log(e);
        }
    }

    async register(request, result) {
        try {
            // Getting login data from body
            const { email, name, password } = JSON.parse(request.body);
            const user_data = await userService.registeration(email, name, password);

            // Return user data
            result.status(200).send(user_data);
        } catch (e) {
            console.log(e);
        }
    }

    async logout(request, result) {
        try {
            const { email } = JSON.parse(request.body);
            const user_data = await userService.logout(email);
        } catch (e) {
            console.log(e);
        }
    }

    async getInfo(request, result) {
        try {
            const { email, name, password } = JSON.parse(request.body);
            const user_data = await userService.login(email, password);

            // Return user data
            result.status(200).send(user_data);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController();