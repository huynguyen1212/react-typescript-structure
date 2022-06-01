/**
 * Container Generator
 */

module.exports = {
  description: "Add a container component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Home",
    },
    {
      type: "input",
      name: "path",
      default: "",
      message: "What is path ?",
    },
  ],
  actions: (data) => {
    const path = `../../src/containers/${
      data.path ? data.path + "/" : ""
    }{{properCase name}}`;

    const actions = [
      {
        type: "add",
        path: path + "/index.tsx",
        templateFile: "./containers/index.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path + "/store/reducers.ts",
        templateFile: "./containers/reducers.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path + "/store/message-trans.ts",
        templateFile: "./containers/message-trans.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path + "/store/actions.ts",
        templateFile: "./containers/actions.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path + "/store/constants.ts",
        templateFile: "./containers/constants.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path + "/store/types.ts",
        templateFile: "./containers/types.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path + "/store/selecters.ts",
        templateFile: "./containers/selecters.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path + "/style/index.ts",
        templateFile: "./containers/styles-styled.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../../src/redux/root-reducers.ts",
       pattern: new RegExp(/.*\/\/.*\[IMPORT NEW CONTAINERSTATE ABOVE\].+\n/),
        templateFile: "./containers/importReducer.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../../src/redux/root-reducers.ts",
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW REDUCER KEY ABOVE\].+\n/),
        templateFile: "./containers/combinesReducer.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
