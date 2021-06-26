class UserService {
    async getUserFromSession() {
        let result = await fetch("/req/user-session", {
            method: "GET"
        });

        if (result.ok) {
            return await result.json();
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async register(email, name, password, status) {
        let reg_data = { email, name, password, status }
        let result = await fetch("/req/user-registration", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(reg_data)
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
            body: JSON.stringify(login_data)
        });

        if (result.ok) {
            return await result.json();
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async logout() {
        let result = await fetch("/req/user-logout", {
            method: "GET",
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
            body: JSON.stringify({ id })
        });

        if (result.ok) {
            return await result.json();
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async getGroups() {
        let result = await fetch("/req/user-get-groups", {
            method: "GET"
        });

        if (result.ok) {
            let userGroups = await result.text();
            return JSON.parse(userGroups);
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async joinGroup(groupName, isPrivate, password) {
        let result;
        if (isPrivate) {
            result = await fetch("/req/user-join-group", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: JSON.stringify({ groupName, isPrivate, password })
            });
        } else {
            result = await fetch("/req/user-join-group", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: JSON.stringify({ groupName, isPrivate })
            });
        }

        if (!result.ok) {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }
}

export default new UserService();