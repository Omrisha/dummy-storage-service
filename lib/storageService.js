var KeyValuePair = require("./KeyValuePair");

class StorageService {

    constructor() {
        this.myStorage = new Map();
    }

    store(key, value) {
        return new KeyValuePair(key, this.myStorage
            .set(key, value)
            .get(key));
    }

    getValueByKey(key) {
        return this.myStorage.get(key);
    }

    getAll(size, page) {
        return Array.from(this.myStorage,
            ([key, value]) => new KeyValuePair(key, value))
            .slice(size * page, size * page + size);
    }

    updateExistingValue(key, updated) {
        this.myStorage.has(key) ?
            this.myStorage.set(key, updated) : null;
    }

    deleteValueByKey(key) {
        this.myStorage.delete(key);
    }

    deleteAll() {
        this.myStorage.clear();
    }

}

module.exports = new StorageService();