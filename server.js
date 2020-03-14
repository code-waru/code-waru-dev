let bs = require("browser-sync").create();

const paths = {
  rootDir : "./docs",
  srcDir : "./docs",
  html: "./docs/**/*.html"
}

bs.init({
  ui: {
      port: 3001
  },
  port: 3000,
  server: paths.rootDir,
  online: false,
  open: false,
  files: [paths.html]
});
