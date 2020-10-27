const fetch = require('node-fetch')

class HTTP {
    constructor(name) {
        this.name = 'HTTP';
    }

    getName() {
        return this.name
    }
}

module.exports = {
    HTTP: HTTP
};
