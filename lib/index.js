var generateActions, generateApi, generateRoutes;

generateRoutes = require('./routes');

generateActions = require('./actions');

module.exports = generateApi = function(router, model, prefix) {
  var actions;
  if (prefix == null) {
    prefix = '';
  }
  actions = generateActions(model);
  generateRoutes(router, model.modelName, actions, prefix);
};
