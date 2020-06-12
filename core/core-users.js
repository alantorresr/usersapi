const DbUser = require('../db/user/db-user');

class CoreUser {
    constructor() { };

    async getUserById(id) {
        let dbUser = new DbUser();
        let doc = await dbUser.getById(id).catch(err => { return {} });
        let result = {};
        if (doc !== {}) {
            result = doc;
        }
        return result;
    }
    
    async newUser(user) {
        let dbUser = new DbUser();
        let doc = await dbUser.getByEmail(user.email).catch(err => { return {} });
        let result = {};
        if(!doc){
            result = dbUser.new(user);
        }
        return result;
    }

    updateUser(id, user) {
        let dbUser = new DbUser();
        return dbUser.update(id, user);
    }

    deleteUser(id) {
        let dbUser = new DbUser();
        return dbUser.delete(id);
    }
}

module.exports = CoreUser;