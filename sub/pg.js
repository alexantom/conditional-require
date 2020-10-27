const pg = require('pg')

class Pg {
    constructor(name) {
        this.name = 'Pg';
    }

    getName() {
        return this.name
    }
}

module.exports = {
    Pg: Pg
};

