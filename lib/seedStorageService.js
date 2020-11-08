var storageService = require("./storageService");

const NUM_OF_ENTRIES = 15;

module.exports = () => {
    for (let i = 1; i < NUM_OF_ENTRIES + 1; i++) {
        let value = {
            email: "user" + (NUM_OF_ENTRIES - i) + "@afeka.ac.il",
            name: { first: i + "Cynthia", last: "Chambers" },
            password: "ab4de",
            birthdate: i + "-11-1963",
            roles: ["admin", "devs", "inspector"]
        };

        storageService.store(value.email, value);
    }
};