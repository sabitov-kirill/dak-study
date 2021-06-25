const userService = require('../services/user-service');
const GroupService = require('../services/group-service');

class UserController {
    async session(request, result) {
        try {
            const { email, password } = request.cookies;
            const userData = await userService.login(email, password);

            // Return user data
            result.status(200).send(userData);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async register(request, result) {
        try {
            // Getting login data from body
            const { email, name, password } = JSON.parse(request.body);
            const userData = await userService.registeration(email, name, password);

            // Return user data
            result.cookie('email', email, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('password', password, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('status', userData.status, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('id', userData.id, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.status(200).send(userData);
        } catch (e) {
            result.status(400).send({ Error: e });
        }
    }

    async login(request, result) {
        try {
            // Getting registration data from body
            const { email, password } = JSON.parse(request.body);
            const userData = await userService.login(email, password);

            // Return user data
            result.cookie('email', userData.email, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('password', password, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('status', userData.status, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.cookie('id', userData.id, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            result.status(200).send(userData);
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
            result.cookie('id', '', { maxAge: 0, httpOnly: true });
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
            result.status(200).send({ isSuccsess: true });
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async getInfo(request, result) {
        try {
            const { id } = JSON.parse(request.body);
            const userData = await userService.getInfo(id);

            // Return user data
            result.status(200).send(userData);
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async getGroups(request, result) {
        try {
            const { id } = JSON.parse(request.cookies);
            const userGroups = await userService.getGroups(id);

            // Return user data
            result.status(200).send(JSON.stringify(userGroups));
        } catch (e) {
            result.status(400).send(e);
        }
    }

    async joinGroup(request, result) {
        try {
            const { groupName, password } = JSON.parse(request.body);
            const { id } = request.cookies;

            await GroupService.addMember(groupName, password, id);
            await userService.joinGroup(id, groupName);

            result.status(200).send({ isSuccsess: true });
        } catch (e) {
            result.status(400).send(e);
        }
    }
}

module.exports = new UserController();