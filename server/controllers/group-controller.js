const GroupService = require('../services/group-service')

class GroupController {
    async create(request, response) {
        try {
            const { name, isPublic, password } = JSON.parse(request.body);

            if (isPublic) await GroupService.create(name);
            else await GroupService.create(name, password);

            response.status(200);
        } catch (error) {
            response.status(400).send(error);
        }
    }

    async getPrivacy(request, response) {
        try {
            const { name } = JSON.parse(request.body);
            const isPrivate = await GroupService.getPrivacy(name);

            response.status(200).send({ isPrivate });
        } catch (e) {
            response.status(400).send(e);
        }
    }

    async getUsers(request, response) {
        try {
            const { name } = JSON.parse(request.body);
            const usersId = await GroupService.getUsers(name);

            response.status(200).send(JSON.stringify({ usersId }));
        } catch (e) {
            response.status(400).send(error);
        }
    }
}

module.exports = new GroupController();