class UserService {
    async register(email, name, password) {
        try {
            let reg_data = { email, name, password }
            let result = await fetch("/req/user-registration", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: JSON.stringify(reg_data)
            });
            return await result.json();
        } catch {
            console.log("Auth service post method error.");
        }
    }

    async login(email, password) {
        try {
            let login_data = { email, password }
            let result = await fetch("/req/user-login", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: JSON.stringify(login_data)
            });
            return await result.json();
        } catch {
            console.log("Auth service post method error.");
        }
    }

    async logout(email) {
        try {
            let result = await fetch("/req/user-logout", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: { email }
            });
        } catch {
            console.log("Auth service post method error.");
        }
    }

    async getInfo(id) {
        try {
            let result = await fetch("/req/user-getinfo", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: { id }
            });
            return await result.json();
        } catch {
            console.log("Auth service post method error.");
        }
    }
}

export default UserService;