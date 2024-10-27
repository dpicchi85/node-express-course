const Task = require("../models/Task");
const { ok, ko } = require("./response");

const getAll = (req, res) => {
  res.status(200).json(ok(true, {}));
};

const create = async (req, res, next) => {
  try {
    const data = await Task.create(req.body);
    ok(res, data);
  } catch (error) {
    ko(res, error);
    next(error);
  }
};

const getOne = (req, res) => {
  ok(res, { id: req.params.id });
};

const update = (req, res) => {
  res.status(200).json(ok(true, req.body));
};

const deleteOne = (req, res) => {
  res.status(200).json(ok(true, { id: req.params.id }));
};

module.exports = {
  getAll,
  create,
  getOne,
  update,
  deleteOne,
};
