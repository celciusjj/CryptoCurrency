const prettier = "prettier --write";
const eslint = "npm run lint:commit";

module.exports = {
  "*.json": [prettier],
  "*.{js,jsx}": [prettier, eslint],
  "*.{ts,tsx}": [prettier, eslint, () => "tsc-files --noEmit"],
};
