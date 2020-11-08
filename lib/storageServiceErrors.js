class KeyExistsError extends Error {
    constructor() {
        super("Illegal action, key already exists.");
    }
}

class IllegalSortByError extends Error {
    constructor() {
        super("Illegal sortBy paramater received.");
    }
}

class IllegalSortOrderError extends Error {
    constructor() {
        super("Illegal sortOrder paramater received.");
    }
}

class IllegalSizeError extends Error {
    constructor() {
        super("Illegal size paramater received.");
    }
}

class IllegalPageError extends Error {
    constructor() {
        super("Illegal page paramater received.");
    }
}

class IllegalCritiriaTypeError extends Error {
    constructor() {
        super("Illegal critiriaType paramater received.");
    }
}

class IllegalCritiriaOperatorError extends Error {
    constructor() {
        super("Illegal critiriaOperator paramater received.");
    }
}

class ContainsOnNotArrayError extends Error {
    constructor() {
        super("Illegal contains operator on critiriaValue paramater that is not an array.");
    }
}

module.exports = {
    KeyExistsError: KeyExistsError,
    IllegalSortByError: IllegalSortByError,
    IllegalSizeError: IllegalSizeError,
    IllegalPageError: IllegalPageError,
    IllegalSortOrderError: IllegalSortOrderError,
    IllegalCritiriaTypeError: IllegalCritiriaTypeError,
    IllegalCritiriaOperatorError: IllegalCritiriaOperatorError,
    ContainsOnNotArrayError: ContainsOnNotArrayError
};