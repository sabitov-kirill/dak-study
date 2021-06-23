const userService = require('../services/user-service');
const GroupService = require('../services/group-service');

class UserController {
    async register(request, result) {
        try {
            // Getting login data from body
            const { email, name, password } = JSON.parse(request.body);
            const user_data = await userService.registeration(email, name, password);

            // Return user data
            result.status(200).send(user_data);
        } catch (e) {
            result.status(400).send(e);
            console.log(e);
        }
    }

    async login(request, result) {
        try {
            // Getting registration data from body
            const { email, password } = JSON.parse(request.body);
            const user_data = await userService.login(email, password);

            // Return user data
            result.status(200).send(user_data);
        } catch (e) {
            result.status(400).send(e);
            console.log(e);
        }
    }

    async logout(request, result) {
        try {
            const { email } = JSON.parse(request.body);
            await userService.logout(email);
            result.status(200);
        } catch (e) {
            result.status(400).send(e);
            console.log(e);
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
            console.log(e);
        }
    }

    async joinGroup(request, result) {
        try {
            const { userId, groupName } = JSON.parse(request.body);

            GroupService.addMember(groupName, userId);
            userService.joinGroup(userId, groupName);
        } catch (e) {
            result.status(400).send(e);
            console.log(e);
        }
    }
}

module.exports = new UserController();