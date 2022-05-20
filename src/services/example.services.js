// uses the models created during db creation
// const models = require("../../models");

const justExample = async () => {
  return "Hello inside the justExample service";
};

const exampleParams = async (parameter) => {
  return `Hey there inside the exampleParams file ${parameter}`;
};

module.exports = {
  justExample,
  exampleParams,
};
