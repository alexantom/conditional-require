const aws = require('aws-sdk')

class AWS {
    constructor(name) {
        this.name = 'AWS';
    }

    getName() {
        return this.name
    }
}

module.exports = {
    AWS: AWS
};
