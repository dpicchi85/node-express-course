const express = require("express");
const router = express.Router();
const logger = require("../logger");
const {
  getAll,
  create,
  getOne,
  update,
  deleteOne,
} = require("../controllers/tasks");

router.route("/").get(getAll).post(create);
router.route("/:id").get(getOne).patch(update).delete(deleteOne);

module.exports = router;
