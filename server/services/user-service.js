const bcrypt = require('bcrypt');
const nanoid = require('nanoid');

const UserModel = require('../models/user-model');

class UserService {
    async registeration(email, name, password) {
        // User creation
        const activationLink = `activate${nanoid.nanoid()}`;
        const passwordHash = await bcrypt.hash(password, 4);
        const user = await UserModel.create({
            email,
            name,
            status: 'student',
            password: passwordHash,
            groupsNames: new Map(),
            isOnline: true,
            activationLink
        })
            .then(null, (error) => {
                if (error.code === 11000) {
                    throw new Error(`User with email "${email}" already exist.`)
                } else {
                    throw error;
                }
            });

        await this.joinGroup(user._id, 'public');

        // Return user info object
        return {
            email: user.email,
            name: user.name,
            isOnline: user.isOnline,
            status: user.status,
            groupsNames: user.groupsNames,
            id: user._id
        };
    }

    async login(email, password) {
        // Check if user exist and set online status to true
        const user = await UserModel.findOneAndUpdate({ email }, { isOnline: true })
        if (!user) throw new Error('Wrong id. User not found.');

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw new Error(`Wrong password.`)
        }

        // Return user info object
        return {
            email: user.email,
            name: user.name,
            status: user.status,
            isOnline: user.isOnline,
            groupsNames: user.groupsNames,
            id: user._id
        }
    }

    async logout(email) {
        const user = await UserModel.findOneAndUpdate({ email }, { isOnline: false });
        if (!user) throw new Error('Wrong id. User not found.');
    }

    async setStatus(id, status) {
        const user = await UserModel.findOneAndUpdate({ _id: id }, { status });
        if (!user) throw new Error('Wrong id. User not found.');
    }

    async getInfo(id) {
        const user = await UserModel.findOne({ _id: id })
        if (!user) throw new Error('Wrong id. User not found.');

        // Return user info object
        return {
            email: user.email,
            name: user.name,
            isOnline: user.isOnline,
            groupsNames: user.groupsNames,
            id: user._id
        }
    }

    async joinGroup(id, groupName) {
        const user = await UserModel.findOne({ _id: id })
        if (!user) throw new Error('Wrong id. User not found.');

        if (user.groupsNames.has(groupName)) throw new Error(`User already in group with name ${groupName}`);
        else user.groupsNames.set(groupName, 1);
        await user.save();
    }
}

module.exports = new UserService();