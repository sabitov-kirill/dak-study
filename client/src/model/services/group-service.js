class GroupService {
    async create(name, isPublic, password) {
        let result;
        if (isPublic) {
            result = await fetch("/req/group-create", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: JSON.stringify({ name, isPublic })
            });
        } else {
            result = await fetch("/req/group-create", {
                method: "POST",
                headers: { "Contet-Type": "application/json;charset=utf-8" },
                body: JSON.stringify({ name, isPublic, password })
            });
        }

        if (!result.ok) {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async getPrivacy(name) {
        let result = await fetch("/req/group-privacy", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({ name })
        });

        if (result.ok) {
            return await result.json();
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async getUsers(name) {
        let result = await fetch("/req/group-users", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({ name })
        });

        if (result.ok) {
            let usersId = await result.text();
            return JSON.parse(usersId);
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }
}

export default new GroupService();