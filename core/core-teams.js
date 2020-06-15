const DbTeam = require('../db/team/db-team');

class CoreTeam {
    constructor() { };

    async getTeamById(id) {
        let dbTeam = new DbTeam();
        let doc = await dbTeam.getById(id).catch(err => { return {} });
        let result = {};
        if (doc !== {}) {
            result = doc;
        }
        return result;
    }
    
    newTeam(team) {
        let dbTeam = new DbTeam();
        return dbTeam.new(team);
    }

    updateTeam(id, team) {
        let dbTeam = new DbTeam();
        return dbTeam.update(id, team);
    }

    deleteTeam(id) {
        let dbTeam = new DbTeam();
        return dbTeam.delete(id);
    }
}

module.exports = CoreTeam;