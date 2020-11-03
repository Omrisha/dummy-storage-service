var storageService = require("./storageService");

const DEFAULT_QUERY_SIZE = 10;
const DEFAULT_QUERY_PAGE = 0;


exports.store = (req, res) => {
    res.send(storageService
        .store(req.params.key, req.body));
};

exports.getValueByKey = (req, res) => {
    res.send(storageService
        .getValueByKey(req.params.key));
};

exports.getAll = (req, res) => {
    let querySize = req.query.size || DEFAULT_QUERY_SIZE;
    let queryPage = req.query.page || DEFAULT_QUERY_PAGE;
    res.send(storageService.getAll(querySize, queryPage));
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