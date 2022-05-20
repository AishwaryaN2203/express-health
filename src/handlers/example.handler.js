const services = require("../services/example.services");

const justExample = async (req, res) => {
  try {
    const exampleVariable = await services.justExample();
    res.json({ exampleVariable }).status(200);
  } catch (err) {
    res.json(`There is some error ${err}`).status(500);
  }
};

const exampleParams = async (req, res) => {
  try {
    const exampleVariable = await services.exampleParams(req.params.id);
    res.json({ exampleVariable }).status(200);
  } catch (err) {
    res.json(`There is some error ${err}`).status(500);
  }
};

module.exports = {
  justExample,
  exampleParams,
};
