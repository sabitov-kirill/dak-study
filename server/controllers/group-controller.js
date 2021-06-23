
const GroupService = require('../services/group-service')

class GroupController {
    create(request, response) {
        try {
            const { name, isPublic, password } = request.body;

            if (isPublic) GroupService.create(name);
            else GroupService.create(name, password);

            response.status(200);
        } catch (error) {
            response.status(400).send(error);
        }
    }

    getInfo(request, response) {

    }
}

module.exports = new GroupController();