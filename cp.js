var gulp = require('gulp');
var path = require('path');

var DOCSTRAP_SRC = path.join(__dirname, 'docstrap/**/*');
var DOCSTRAP_DIST = path.join(__dirname, 'node_modules', 'ink-docstrap');

return gulp.src(DOCSTRAP_SRC)
  .pipe(gulp.dest(DOCSTRAP_DIST));
