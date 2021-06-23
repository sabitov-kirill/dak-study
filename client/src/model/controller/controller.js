import { io, Socket } from "socket.io-client"

import UserService from '../services/user-service'

let userService = new UserService();

class Controller {
    // properties setters
    setIsLoggedIn(value) {
        if (typeof value === "boolean") {
            this.isLoggedIn = value;
        } else {
            console.log("Cant set auth status. Wrong status.");
        }
    }
    setUser(value) {
        this.User = value;
    }

    // Basic constructor
    constructor() {
        this.socket = io();
        this.setIsLoggedIn(false);
    }

    // User sign in function
    async signIn(email, password) {
        try {
            let user = await userService.login(email, password);
            this.setUser(user);
            this.setIsLoggedIn(true);
        } catch (e) {
            throw new Error(`Sign in error: ${e}`);
        }
    }

    // User sign up function
    async signUp(email, firstName, lastName, password) {
        try {
            let user = await userService.register(email, `${firstName} ${lastName}`, password);
            this.setUser(user);
            this.setIsLoggedIn(true);
        } catch (e) {
            throw new Error(`Sign up error: ${e}`);
        }
    }

    // User sign out function
    signOut(email) {
        try {
            userService.logout(email);
            this.setUser(null);
            this.setIsLoggedIn(false);
        } catch (e) {
            throw new Error(`Sign out error: ${e}`);
        }
    }

    joinGroup(groupName) {
        try {
            userService.joinGroup(this.user.id, groupName);
        } catch (e) {
            throw new Error(`Joining group error: ${e}`);
        }
    }
}

export default Controller;