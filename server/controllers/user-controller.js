const userService = require('../services/user-service');
const GroupService = require('../services/group-service');

class UserController {
    async session(request, result) {
        try {
            const { email, password } = request.cookies;
            const user_data = await userService.login(email, password);

            // Return user data
            result.status(200).send(user_data);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async register(request, result) {
        try {
            // Getting login data from body
            const { email, name, password } = JSON.parse(request.body);
            const user_data = await userService.registeration(email, name, password);

            // Return user data
            result.cookie('email', email, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('password', password, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('status', user_data.status, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.status(200).send(user_data);
        } catch (e) {
            result.status(400).send({ Error: e });
        }
    }

    async login(request, result) {
        try {
            // Getting registration data from body
            const { email, password } = JSON.parse(request.body);
            const user_data = await userService.login(email, password);

            // Return user data
            result.cookie('email', user_data.email, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('password', password, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('status', user_data.status, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.status(200).send(user_data);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async logout(request, result) {
        try {
            const { email } = request.cookies;
            await userService.logout(email);

            // Return user data
            result.cookie('email', '', { maxAge: 0, httpOnly: true });
            result.cookie('password', '', { maxAge: 0, httpOnly: true });
            result.cookie('status', '', { maxAge: 0, httpOnly: true });
            result.status(200).send({ email });
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async setStatus(request, result) {
        try {
            const { id } = request.cookies;
            const { status } = JSON.parse(request.body);
            await userService.setStatus(id, status);

            // Return user data
            result.cookie('status', status, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.status(200);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async getInfo(request, result) {
        try {
            const { id } = JSON.parse(request.body);
            const user_data = await userService.getInfo(id);

            // Return user data
            result.status(200).send(user_data);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async joinGroup(request, result) {
        try {
            const { userId, groupName } = JSON.parse(request.body);

            GroupService.addMember(groupName, userId);
            userService.joinGroup(userId, groupName);
        } catch (e) {
            result.status(400).send(e);
        }
    }
}

module.exports = new UserController();