const path = require(`path`);
const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@actions": path.resolve(__dirname, "./src/store/actions"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@fire": path.resolve(__dirname, "./src/components/feature/firebase"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
    },
  },
};
