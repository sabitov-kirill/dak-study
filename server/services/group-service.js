const GroupModel = require('../models/group-model');

class GroupService {
    create(groupName) {
        GroupModel.create({
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

    create(groupName, groupPassword) {
        GroupModel.create({
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

    getInfo(groupName) {
        const group = GroupModel.findOne({ name: groupName });
        if (!group) throw new Error(`Group with name ${groupName} doesn't exist.`);

        return {
            name: group.name,
            usersId: group.usersId
        };
    }

    addMember(groupName, userId) {
        const group = GroupModel.findOneAndUpdate(
            { name: groupName },
            { $addToSet: { usersId: userId } }
        );
        if (!group) throw new Error(`Group with name ${groupName} doesn't exist.`);
    }
}

module.exports = new GroupService();