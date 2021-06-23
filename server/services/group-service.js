const GroupModel = require('../models/group-model');

class GroupService {
    async create(groupName) {
        await GroupModel.create({
            name: groupName
        })
            .then(null, (error) => {
                if (error.code === 11000) {
                    throw new Error(`Group with name "${groupName}" already exist.`)
                } else {
                    throw error;
                }
            });
    }

    async create(groupName, groupPassword) {
        await GroupModel.create({
            name: groupName,
            isPublic: true,
            password: groupPassword
        })
            .then(null, (error) => {
                if (error.code === 11000) {
                    throw new Error(`Group with name "${groupName}" already exist.`)
                } else {
                    throw error;
                }
            });
    }

    async getUsers(groupName) {
        const group = await GroupModel.findOne({ name: groupName });
        if (!group) throw new Error(`Group with name ${groupName} doesn't exist.`);

        return group.usersId;
    }

    async getPrivacy(groupName) {
        const group = await GroupModel.findOne({ name: groupName });
        if (!group) throw new Error(`Group with name ${groupName} doesn't exist.`);

        return group.isPrivate;
    }

    async addMember(groupName, userId) {
        const group = await GroupModel.findOneAndUpdate(
            { name: groupName },
            { $addToSet: { usersId: userId } }
        );
        if (!group) throw new Error(`Group with name ${groupName} doesn't exist.`);
    }
}

module.exports = new GroupService();