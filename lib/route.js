var router = require("express").Router();
var storageController = require("./storageController");

router.post("/:key", storageController.store);

router.get("/:key", storageController.getValueByKey);

router.get("/", storageController.getAll);

router.put("/:key", storageController.updateExistingValue);

router.delete("/:key", storageController.deleteValueByKey);

router.delete("/", storageController.deleteAll);

module.exports = router;