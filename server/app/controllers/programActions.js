// Some data to make the trick

const tables = require("../../database/tables");

// Declare the action

const browse = async (req, res) => {
  const programFromDB = await tables.program.readAll();
  if (req.query.q != null) {
    const filteredPrograms = programFromDB.filter((program) =>
      program.synopsis.includes(req.query.q)
    );
    res.json(filteredPrograms);
  }
  res.json(programFromDB);
};

const read = async (req, res) => {
  const programFromDB = await tables.program.readAll();
  const parsedId = parseInt(req.params.id, 10);

  const program = programFromDB.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export it to import it somewhere else

module.exports = { browse, read };
