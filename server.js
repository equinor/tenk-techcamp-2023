var browserSync = require("browser-sync");

browserSync({
  server: ".",
  files: ["./*.html", "./*.css", "./*.js"],
});
