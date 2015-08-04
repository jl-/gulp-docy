var gulp = require('gulp');
var path = require('path');
var jsdoc = require('./jsdoc');
var merge = require('merge-stream');

var DOCSTRAP_SRC = path.join(__dirname, 'docstrap/**/*');
var DOCSTRAP_DIST = path.join(__dirname, 'node_modules', 'ink-docstrap');


// var docy = function(destination, template, infos, buildOptions) {
//   template.__path = path.join(__dirname, 'docstrap', 'template');
//   return jsdoc(destination, template, infos, buildOptions);
// };

var docy = function(src, destination, template, infos, buildOptions) {
  // var stream = gulp.src(DOCSTRAP_SRC)
  //   .pipe(gulp.dest(DOCSTRAP_DIST))
  //   .on('end', function() {
  //   });
  //     console.log(src);
      var stream2 = gulp.src(src)
        .pipe(jsdoc(destination, template, infos, buildOptions));
      // return merge(stream2, stream);
      return stream2;
};

module.exports = docy;
module.exports = jsdoc;

