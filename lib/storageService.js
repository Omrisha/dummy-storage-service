var KeyValuePair = require("./KeyValuePair");
var storageServiceErrors = require("./storageServiceErrors");

const DEFAULT_QUERY_SIZE = 10;
const DEFAULT_QUERY_PAGE = 0;
const ASC_SORT_ORDER = "ASC";
const DESC_SORT_ORDER = "DESC";
const EQUALS_OPERATOR = "equals";
const BIGEER_THAN_OPERATOR = "biggerThan";
const SMALLER_THAN_OPERATOR = "smallerThan";
const CONTAINS_OPERATOR = "contains";
const DATE_REGEX = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

class StorageService {

    constructor() {
        this.myStorage = new Map();
    }

    store(key, value) {
        if (this.myStorage.has(key))
            throw new storageServiceErrors.KeyExistsError();
        return new KeyValuePair(key, this.myStorage
            .set(key, value)
            .get(key));
    }

    getValueByKey(key) {
        return this.myStorage.get(key);
    }

    getAll(size, page) {
        this.validateParamaters(size, page);

        return this.pagination(
            Array.from(this.myStorage,
                ([key, value]) => new KeyValuePair(key, value)),
            size,
            page);
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

    search(
        size = DEFAULT_QUERY_SIZE,
        page = DEFAULT_QUERY_PAGE,
        sortBy = null,
        sortOrder = ASC_SORT_ORDER,
        criteriaType = null,
        criteriaValue = null,
        criteriaOperator = EQUALS_OPERATOR) {
        this.validateParamaters(size, page, sortOrder, criteriaOperator);

        let values = [...this.myStorage.values()];

        if (criteriaType != null && criteriaValue != null) {
            criteriaValue = DATE_REGEX.test(criteriaValue) ?
                this.getDateCompareFormat(criteriaValue) : criteriaValue;

            values = this.filterValues(
                values,
                criteriaType,
                criteriaValue,
                criteriaOperator);
        }
        if (sortBy != null) {
            values = this.sortValues(values, sortBy);
        }

        return this.pagination(
            sortOrder == ASC_SORT_ORDER ? values : values.reverse(),
            size, page);
    }

    filterValues(values, criteriaType, value, operator) {
        let prop = criteriaType.split(".");
        let len = prop.length;

        return values.filter(a => {
            let i = 0;
            while (i < len) {
                a = a[prop[i]];
                i++;
            }

            if (a == null)
                throw new storageServiceErrors.IllegalCritiriaTypeError();

            a = DATE_REGEX.test(a) ? this.getDateCompareFormat(a) : a;

            switch (operator) {
                case EQUALS_OPERATOR:
                    return a == value;

                case BIGEER_THAN_OPERATOR:
                    return a > value;

                case SMALLER_THAN_OPERATOR:
                    return a < value;

                case CONTAINS_OPERATOR:
                    if (!Array.isArray(a))
                        throw new storageServiceErrors.ContainsOnNotArrayError()
                    return a.includes(value);

                default:
                    return false;
            }
        });
    }

    sortValues(values, sortBy) {
        let prop = sortBy.split(".");
        let len = prop.length;

        return values.sort((a, b) => {
            let i = 0;
            while (i < len) {
                a = a[prop[i]];
                b = b[prop[i]]; i++;
            }
            if (a == null || b == null)
                throw new storageServiceErrors.IllegalSortByError();

            a = DATE_REGEX.test(a) ? this.getDateCompareFormat(a) : a;
            b = DATE_REGEX.test(b) ? this.getDateCompareFormat(b) : b;

            return a > b ? 1 : a < b ? -1 : 0;
        });
    }

    pagination(arr, size, page) {
        return arr.slice(size * page, size * page + size);
    }

    validateParamaters(
        size,
        page,
        sortOrder = ASC_SORT_ORDER,
        critiriaOperator = EQUALS_OPERATOR) {
        if (size < 0) throw new storageServiceErrors.IllegalSizeError;
        if (page < 0) throw new storageServiceErrors.IllegalPageError;
        if (sortOrder != ASC_SORT_ORDER &&
            sortOrder != DESC_SORT_ORDER)
            throw new storageServiceErrors.IllegalSortOrderError;
        if (critiriaOperator != EQUALS_OPERATOR &&
            critiriaOperator != BIGEER_THAN_OPERATOR &&
            critiriaOperator != SMALLER_THAN_OPERATOR &&
            critiriaOperator != CONTAINS_OPERATOR)
            throw new storageServiceErrors.IllegalCritiriaOperatorError()
    }

    getDateCompareFormat(val) {
        return val.split('-').reverse().join('');
    }

}

module.exports = new StorageService();