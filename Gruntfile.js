var grunt = require('grunt');
var path = require('path');

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
  less: {
    dest: {
      options: {
        paths: ['public/stylesheets/less'],
        sourceMap: true,
        sourceMapBasepath: 'public',
        sourceMapRootpath: '/',
        sourceMapURL: '/dest/css/styles.css.map'
      },
      modifyVars: {
        '@lesshat': path.join(process.cwd(), 'public/bower_components/lesshat/build/lesshat.less')
      },
      files: {
        'public/dest/css/styles.css': 'public/stylesheets/less/styles.less'
      }  
    }
  },
  watch: {
    scss: {
      files: 'public/stylesheets/scss/**/*.scss',
      tasks: ['compass:dest']
    },
    less: {
      files: 'public/stylesheets/less/**/*.less',
      tasks: ['less:dest']
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
grunt.loadNpmTasks('grunt-contrib-less');