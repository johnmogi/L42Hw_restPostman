const dal = require("../db/db");

function getAllPresents() {
    return dal.presents;
}

function getOnePresent(id) {
    const present = dal.presents.find(p => p.id === id);
    return present;
}

// ......

module.exports = {
    getAllPresents,
    getOnePresent
};