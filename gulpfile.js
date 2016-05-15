'use strict';

const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    typescript = require('gulp-typescript'),
    merge = require('merge2');

const project = typescript.createProject('./tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('build', () => {
    const result = project.src()
        .pipe(sourcemaps.init())
        .pipe(typescript(project));

    return merge([
        result.dts.pipe(gulp.dest('.')),
        result.js
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('.'))
    ]);
});

gulp.task('default', ['build']);
