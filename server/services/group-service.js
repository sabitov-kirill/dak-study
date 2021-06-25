const GroupModel = require('../models/group-model');

class GroupService {
    async create(groupName, isPrivate, groupPassword) {
        let newGroup;

        if (isPrivate) {
            const passwordHash = await bcrypt.hash(groupPassword, 4);
            newGroup = await GroupModel.create({
                name: groupName,
                isPrivate,
                password: passwordHash
            })
                .then(null, (error) => {
                    if (error.code === 11000) {
                        throw new Error(`Group with name "${groupName}" already exist.`)
                    } else {
                        throw error;
                    }
                });
        } else {
            newGroup = await GroupModel.create({
                name: groupName,
                isPrivate
            })
                .then(null, (error) => {
                    if (error.code === 11000) {
                        throw new Error(`Group with name "${groupName}" already exist.`)
                    } else {
                        throw error;
                    }
                });
        }
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

    async addMember(name, password, userId) {
        const group = await GroupModel.findOne({ name })
        if (!group) throw new Error(`Group with name ${name} doesn't exist.`);

        if (group.isPrivate) {
            const isPassEquals = await bcrypt.compare(password, group.password);
            if (isPassEquals) throw new Error('Wrong group password');
        }

        if (group.usersId.indexOf(userId) === -1) {
            group.usersId.push(userId)
        }
        await group.save();
    }
}

module.exports = new GroupService();