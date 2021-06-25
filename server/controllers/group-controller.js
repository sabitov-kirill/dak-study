const GroupService = require('../services/group-service');
const UserService = require('../services/user-service');

class GroupController {
    async create(request, response) {
        try {
            const { name, isPrivate, password } = JSON.parse(request.body);
            const { id } = request.cookies;

            await GroupService.create(name, isPrivate, password);
            await GroupService.addMember(name, password, id);
            await UserService.joinGroup(id, name);

            response.status(200).send({ isSuccsess: true });
        } catch (e) {
            response.status(400).send(e);
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
            const usersData = await Promise.all(usersId.map(async (id) => {
                return await UserService.getInfo(id);
            }));

            response.status(200).send(JSON.stringify({ usersData }));
        } catch (e) {
            response.status(400).send(e);
        }
    }
}

module.exports = new GroupController();