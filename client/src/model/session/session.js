import { io, Socket } from "socket.io-client"

import UserService from '../user-service/user-service'
let userService = new UserService();

class Session {
    // properties setters
    setIsLoggedIn(value) {
        if (typeof value === "boolean") {
            this.isLoggedIn = value;
        } else {
            console.log("Cant set auth status. Wrong status.");
        }
    }
    setUser(value) {
        if (typeof value === "User") {
            this.User = value;
        } else {
            console.log("Can't set session user. Wrong Type.");
        }
    }

    // Basic constructor
    constructor() {
        this.socket = io();
        this.setIsLoggedIn(false);
    }

    // User sign in function
    async signIn(email, password) {
        try {
            let user = userService.login(email.password);
            this.setUser(user);
            this.setIsLoggedIn(true);
        } catch (e) {
            console.log(`Sign in error: ${e.response?.data?.message}`);
        }
    }

    // User sign up function
    async signUp(email, firstName, lastName, password) {
        try {
            let user = userService.register(email, firstName, lastName, password);
            this.setUser = user;
            this.setIsLoggedIn(true);
        } catch (e) {
            console.log(`Sign up error: ${e.response?.data?.message}`);
        }
    }

    // User sign out function
    signOut() {
        this.User = null;
        this.isLoggedIn = false;
    }
}

export default Session;