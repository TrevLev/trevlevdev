import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(" --file ")}`;

export default {
  "*": "prettier --write",
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
