import path from "path";

export default {
  entry: "./index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
  mode: "production",
};
