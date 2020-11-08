var storageService = require("./storageService");

const DEFAULT_QUERY_SIZE = 10;
const DEFAULT_QUERY_PAGE = 0;
const ERROR_STATUS_CODE = 400;

exports.store = (req, res) => {
    try {
        res.send(storageService
            .store(req.params.key, req.body));
    } catch (error) {
        res.status(ERROR_STATUS_CODE).send(error.message);
    }

};

exports.getValueByKey = (req, res) => {
    res.send(storageService
        .getValueByKey(req.params.key));
};

exports.getAll = (req, res) => {
    let querySize = parseInt(req.query.size) || DEFAULT_QUERY_SIZE;
    let queryPage = parseInt(req.query.page) || DEFAULT_QUERY_PAGE;
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

exports.search = (req, res) => {
    let { size, page, sortBy, sortOrder, criteriaType,
        criteriaValue, criteriaOperator } = req.query;
    try {
        res.send(storageService
            .search(size, page, sortBy, sortOrder, criteriaType,
                criteriaValue, criteriaOperator));
    } catch (error) {
        res.status(400).send(error.message);
    }
}