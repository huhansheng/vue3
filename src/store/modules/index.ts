const contextkeys = require.context("./", false, /\.ts$/);
const files = contextkeys.keys().filter(file => file !== "./index.ts");
const modules = files.reduce((prev, cur) => {
  prev[cur.replace(/(.*\/)*([^.]+).*/gi, "$2")] = contextkeys(cur).default;
  return prev;
}, {});

export default modules;
