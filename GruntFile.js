
module.exports = function(grunt) {


  
  grunt.initConfig({
	sass: {
	 minify: {
		 options: {
          style: 'compressed',
          // Source maps are available, but require Sass 3.3.0 to be installed
          // https://github.com/gruntjs/grunt-contrib-sass#sourcemap
          sourcemap: true
        },
      files: {
        "scoped-twbs.min.css": [
			"scoped-twbs.scss" 
		]
      }
	 }
    }
	
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'sass',
  ]);

};