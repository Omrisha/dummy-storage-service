var storageService = require("./storageService");

const NUM_OF_ENTRIES = 15;

module.exports = () => {
    for (let i = 1; i < NUM_OF_ENTRIES + 1; i++) {
        let value = {};
        for (let j = 0; j < i; j++) {
            value['val' + j] = "" + j;
        }
        storageService.store("key" + i, value);
    }
};