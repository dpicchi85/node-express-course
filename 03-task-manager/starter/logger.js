module.exports.path = (req, res, next) => {
  const method = req.method;
  ret = "";

  console.log(`${method} ${req.path}`);
  next();
};

module.exports.request = (req, res, next) => {
  if (Object.keys(req.params).length >= 0)
    ret += `Params: ${JSON.stringify(req.params)} - `;
  if (Object.keys(req.query).length >= 0)
    ret += `Queries: ${JSON.stringify(req.query)}`;

  console.log(ret);
  next();
};
