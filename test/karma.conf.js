// module.exports = function(config){
//   config.set({

//     basePath : '../',

//     files : [

//     process.env +
//         'node_modules/lodash/lodash.js', 
//       'src/**/*.js',            
//       'test/**/*.js'
//     ],

//     autoWatch : true,

//     frameworks: ['jasmine'],

//     browsers : ['Chrome'],

//     plugins : [
//             'karma-chrome-launcher',            
//             'karma-jasmine',
//             'node_modules/lodash/lodash.js',
//             'node_modules/jquery/dist/jquery.js',
//             ],

//     junitReporter : {
//       outputFile: 'test_out/unit.xml',
//       suite: 'unit'
//     }

//   });
// };