const bcrypt = require('bcrypt');
const nanoid = require('nanoid');

const UserModel = require('../models/user-model');

class UserService {
    async registeration(email, name, password) {
        // User creation
        const id = nanoid.nanoid();
        const activationLink = `activate${id}`;
        const passwordHash = await bcrypt.hash(password, 4);
        const user = await UserModel.create({
            id: id,
            email,
            name,
            password: passwordHash,
            isOnline: true,
            activationLink
        })
            .then(null, (error) => {
                if (error.code === 11000) {
                    throw new Error(`User with email "${email}" already exist.`)
                } else {
                    throw error;
                }
            })

        // Return user info object
        return {
            email: user.email,
            name: user.name,
            isOnline: user.isOnline,
            id: user._id
        };
    }

    async login(email, password) {
        // Check if user exist and set online status to true
        const user = await UserModel.findOneAndUpdate({ email }, { isOnline: true })
        if (!user) {
            throw new Error('Wrong email. User not found.')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw new Error(`Wrong password.`)
        }

        // Return user info object
        return {
            email: user.email,
            name: user.name,
            isOnline: user.isOnline,
            id: user._id
        }
    }

    async logout(email) {
        const user = await UserModel.findOneAndUpdate({ email }, { isOnline: false });
        if (!user) {
            throw new Error("Logout error. User not found.")
        }
    }

    async getInfo(id) {
        const user = await UserModel.findOne({ id })
        if (!user) {
            throw new Error('Wrong id. User not found.')
        }

        // Return user info object
        return {
            email: user.email,
            name: user.name,
            isOnline: user.isOnline,
            id: user._id
        }
    }
}

module.exports = new UserService();