module.exports.ok = (res, data) => {
  res.status(200).json({ success: true, data: data });
};

module.exports.ko = (res, error) =>
  res.status(400).json({ success: false, message: error.message });
