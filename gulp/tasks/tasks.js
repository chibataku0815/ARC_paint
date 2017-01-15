

import gulp from 'gulp';

// ==================================
//
// tasks.
//
// ==================================


gulp.task('build', [ 'sass']);
gulp.task('default', ['setWatch', 'build', 'watch']);
