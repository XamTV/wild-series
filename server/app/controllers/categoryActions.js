const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

const browse = (req, res) => {
  res.json(categories);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  const categorie = categories.find((c) => c.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};
// Export them to import them somewhere else

module.exports = {
  browse,
  read,
};
