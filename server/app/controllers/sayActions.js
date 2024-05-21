const sayWelcome = (req, res) => {
  console.info(req.query);
  res.send(`Welcome to Wild series, ${req.query.name}`);
};

module.exports = { sayWelcome };
