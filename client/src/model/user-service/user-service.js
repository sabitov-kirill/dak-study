class UserService {
    async login(email, password) {
        try {
            let user;
            let login_data = { email, password }

            fetch("/user-login", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: login_data
            })
                .then(result => {
                    user = result.json()
                });
            return user;
        } catch {
            console.log("Auth service post method error.");
        }
    }

    async register(email, name, lastName, password) {
        try {
            let new_user = { email, name, lastName, password }
            let result = await fetch("/user-registration", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: new_user
            });
            return await result.json();
        } catch {
            console.log("Auth service post method error.");
        }
    }
}

export default UserService;