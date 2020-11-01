var storageService = require("./storageService");

exports.store = (req, res) => {
    res.send(storageService
        .store(req.params.key, req.body));
};

exports.getValueByKey = (req, res) => {
    res.send(storageService
        .getValueByKey(req.params.key));
};

exports.getAll = (req, res) => {
    res.send(storageService.getAll());
};

exports.updateExistingValue = (req, res) => {
    storageService.updateExistingValue(req.params.key, req.body);
    res.status(200).end();

};

exports.deleteValueByKey = (req, res) => {
    storageService.deleteValueByKey(req.params.key);
    res.status(200).end();
};

exports.deleteAll = (req, res) => {
    storageService.deleteAll();
    res.status(200).end();
};