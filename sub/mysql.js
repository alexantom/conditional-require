const mysql = require('mysql')

class Mysql {
    constructor(name) {
        this.name = 'Mysql';
    }

    getName() {
        return this.name
    }
}

module.exports = {
    Mysql: Mysql
};

