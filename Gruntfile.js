var grunt = require('grunt');

grunt.initConfig({
  ts: {
    app: {
      options: {
        rootDir: '.'
      },
    }
  },
  concat: {
    vendor: {
      src: [],
      dest: 'public/dest/js/vendor.js'
    }
  }
})

grunt.loadNpmTasks('grunt-ts');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('build', ['ts:app', 'concat:vendor'])