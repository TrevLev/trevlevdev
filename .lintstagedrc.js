import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(" --file ")}`;

export default {
  "*.{js,jsx,ts,tsx,css,scss,html,json,md}": "prettier --write",
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
