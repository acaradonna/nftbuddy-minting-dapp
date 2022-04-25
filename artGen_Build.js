const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/artGeneration.js`);

(() => {
  buildSetup();
  startCreating();
})();
