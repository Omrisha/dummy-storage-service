var KeyValuePair = require("./KeyValuePair");

var proto = {};

proto.myStorage = new Map();

proto.store = (key, value) => {
    return new KeyValuePair(key, proto.myStorage
        .set(key, value)
        .get(key));
};

proto.getValueByKey = (key) => {
    return proto.myStorage.get(key);
};

proto.getAll = () => {
    return Array.from(proto.myStorage,
        ([key, value]) => new KeyValuePair(key, value));
};

proto.updateExistingValue = (key, updated) => {
    proto.myStorage.has(key) ?
        proto.myStorage.set(key, updated) : null;
};

proto.deleteValueByKey = (key) => {
    proto.myStorage.delete(key);
};

proto.deleteAll = () => {
    proto.myStorage.clear();
};

module.exports = proto;