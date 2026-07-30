/** @type {import("lint-staged").Configuration} */
const config = {
  "*.{js,jsx,ts,tsx,mjs,cjs}": ["eslint --fix --max-warnings=0", "prettier --write"],
  "*.{json,css,md,mdx,yml,yaml}": ["prettier --write"],
};

export default config;
