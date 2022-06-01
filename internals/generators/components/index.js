/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

module.exports = {
  description: "Add an unconnected component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
    },
    {
      type: "input",
      name: "path",
      default: "",
      message: "What is path of component ?",
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: `../../src/components/${
          data.path ? data.path + "/" : ""
        }{{properCase name}}/index.tsx`,
        templateFile: "./components/index.tsx.hbs",
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
