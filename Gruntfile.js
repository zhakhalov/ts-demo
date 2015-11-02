var grunt = require('grunt');

grunt.initConfig({
  concat: {
    vendor: {
      src: ['public/bower_components/gss/dist/gss.js'],
      dest: 'public/dest/js/vendor.js'
    },
    gss: {
      src: ['public/stylesheets/gss/layout.gss'],
      dest: 'public/dest/gss/layout.gss'
    }
  },
  compass: {
    dest: {
      options: {
        cssDir: 'public/dest/css',
        sourcemap: true,
        cacheDir: 'public/stylesheets/.sass-cache',
        sassDir: 'public/stylesheets/scss',
        specify: 'public/stylesheets/scss/styles.scss'
      }
    }
  },
  watch: {
    scss: {
      files: 'public/stylesheets/scss/**/*.scss',
      tasks: ['compass:dest']
    },
    gss: {
      files: 'public/stylesheets/gss/**/*.gss',
      tasks: ['concat:gss']
    }
  }
})

grunt.loadNpmTasks('grunt-ts');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');