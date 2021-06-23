class UserService {
    async register(email, name, password) {
        let reg_data = { email, name, password }
        let result = await fetch("/req/user-registration", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: reg_data
        });

        if (result.ok) {
            return await result.json();
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async login(email, password) {
        let login_data = { email, password }
        let result = await fetch("/req/user-login", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: login_data
        });

        if (result.ok) {
            return await result.json();
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async logout(email) {
        let result = await fetch("/req/user-logout", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: { email }
        });

        if (!result.ok) {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async getInfo(id) {
        let result = await fetch("/req/user-getinfo", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: { id }
        });

        if (result.ok) {
            return await result.json();
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async joinGroup(userId, groupName) {
        let result = await fetch("/req/user-join-group", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: { userId, groupName }
        });

        if (!result.ok) {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }
}

export default UserService;