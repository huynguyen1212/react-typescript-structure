/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require("./components/index.js");
const containerGenerator = require("./containers/index.js");

module.exports = (plop) => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("container", containerGenerator);
};
