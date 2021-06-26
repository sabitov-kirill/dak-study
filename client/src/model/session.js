import { io, Socket } from "socket.io-client"

import UserService from './services/user-service'

class Session {
    constructor() {
        this.isLoggedIn = false;
    }

    // Basic constructor
    async init() {
        this.socket = io();

        try {
            let user = await UserService.getUserFromSession()

            this.user = user;
            this.isLoggedIn = true;
        } catch (e) {
            this.isLoggedIn = false;
        }
    }

    // User sign in function
    async signIn(email, password) {
        try {
            let user = await UserService.login(email, password);

            this.user = user;
            this.isLoggedIn = true;
        } catch (e) {
            throw new Error(`Sign in error: ${e}`);
        }
    }

    // User sign up function
    async signUp(email, firstName, lastName, password, status) {
        try {
            let user = await UserService.register(email, `${firstName} ${lastName}`, password, status);

            this.user = user;
            this.isLoggedIn = true;
        } catch (e) {
            throw new Error(`Sign up error: ${e}`);
        }
    }

    // User sign out function
    async signOut() {
        try {
            if (this.isLoggedIn) {
                await UserService.logout();
                delete this.user;
                this.isLoggedIn = false;
            }
        } catch (e) {
            throw new Error(`Sign out error: ${e}`);
        }
    }
}

export default Session;