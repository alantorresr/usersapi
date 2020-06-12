const DbUser = require('../db/user/db-user');
const bcrypt = require('bcryptjs');

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

    async login(userEmail, userPassword) {
        let dbUser = new DbUser();
        let doc = await dbUser.getByEmail(userEmail).catch(err => { return {} });
        const { email, active } = doc;
        const isValidPassword = await dbUser.validatePassword(email, userPassword);
        let result = {};
        if (doc !== {}) {
            if(userEmail === email && isValidPassword && active) {
                result = { ok: true, message: "Successful login", id: doc._id }
            } else {
                if(!active){
                    result = { ok: false, message: "This user is not active" }
                }
                result = { ok: false, message: "Login failed" }
            }
        }
        return result
    }

    async getUserByEmail(userEmail) {
        let dbUser = new DbUser();
        let doc = await dbUser.getByEmail(userEmail).catch(err => { return {} });
        let result = {};
        if (doc !== {}) {
            result = doc;
        }
        return result;
    }
}

module.exports = CoreUser;