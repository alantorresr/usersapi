const User = require('./model/user-schema');

const mongoose = require('./mongodb-connection');

class DbUser {
    constructor() {};

    async new(user){
        if (mongoose.connection.readyState == 1) {
            let instUser = new User(user)
            instUser.password = await instUser.encryptPassword(instUser.password);
            return instUser.save(user);
        } else {
            return new Promise((resolve, reject) => {
                reject({ message: "Database is not available" })
            });
        }
    }

    update(id, user){
        if (mongoose.connection.readyState == 1) {
            return User.findByIdAndUpdate({ _id: id }, user);
        } else {
            return new Promise((resolve, reject) => {
                reject({ message: "Database is not available" })
            });
        }
    }

    delete(id){
        if (mongoose.connection.readyState == 1) {
            return User.findByIdAndDelete(id);
        } else {
            return new Promise((resolve, reject) => {
                reject({ message: "Database is not available" })
            });
        }
    }

    getById(id){
        if (mongoose.connection.readyState == 1) {
            return User.findById(id);
        } else {
            return new Promise((resolve, reject) => {
                reject({ message: "Database is not available" })
            });
        }
    }

}

module.exports = DbUser;