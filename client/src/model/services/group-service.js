class GroupService {
    async create(name, isPrivate, password) {
        let result, groupData;

        if (!isPrivate) {
            groupData = { name, isPrivate };
        } else {
            groupData = { name, isPrivate, password };
        }

        result = await fetch("/req/group-create", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(groupData)
        });

        if (!result.ok) {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async getPrivacy(name) {
        let group_data = { name };
        let result = await fetch("/req/group-privacy", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(group_data)
        });

        if (result.ok) {
            return await result.json();
        } else {
            let err = await result.text();
            throw new Error(`${err}`);
        }
    }

    async getUsers(name) {
        let group_data = { name };
        let result = await fetch("/req/group-users", {
            method: "POST",
            headers: { "Contet-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(group_data)
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