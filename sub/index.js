
exports.None =  () => {
    const { None } = require('./none');
    return None;
};

exports.AWS =  () => {
    const { AWS } = require('./aws');
    return AWS;
};

exports.HTTP =  () => {
    const { HTTP } = require('./http');
    return HTTP;
};

exports.Mysql =  () => {
    const { Mysql } = require('./mysql');
    return Mysql;
};

exports.Pg =  () => {
    const { Pg } = require('./pg');
    return Pg;
};

// module.exports = () => { console.log('bar'); };

// module.exports = {
//     None2: None
// }
