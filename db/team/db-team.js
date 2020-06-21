const Team = require('./model/team-schema');

const mongoose = require('./mongodb-connection');

class DbTeam {
    constructor() {};

    async new(team){
        if (mongoose.connection.readyState == 1) {
            let instTeam = new Team(team)
            return instTeam.save(team);
        } else {
            return new Promise((resolve, reject) => {
                reject({ message: "Database is not available" })
            });
        }
    }

    update(id, team){
        if (mongoose.connection.readyState == 1) {
            return Team.findByIdAndUpdate({ _id: id }, team);
        } else {
            return new Promise((resolve, reject) => {
                reject({ message: "Database is not available" })
            });
        }
    }

    delete(id){
        if (mongoose.connection.readyState == 1) {
            return Team.findByIdAndDelete(id);
        } else {
            return new Promise((resolve, reject) => {
                reject({ message: "Database is not available" })
            });
        }
    }

    getById(id){
        if (mongoose.connection.readyState == 1) {
            return Team.findById(id);
        } else {
            return new Promise((resolve, reject) => {
                reject({ message: "Database is not available" })
            });
        }
    }
}

module.exports = DbTeam;