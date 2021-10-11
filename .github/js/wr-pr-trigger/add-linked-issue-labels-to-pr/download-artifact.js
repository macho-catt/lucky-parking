/**
 * Global Variables
 */
var github
var context
const artifacts = require('../../utils/artifacts.js')
 
 /**
  * Parses the Pull Request body for a linked issue, and returns it
  * @param {Object} g - github object  
  * @param {Object} c - context object 
  * @returns - returns the linked issue number
  */
async function main({g, c}, workspace) {
  github = g
  context = c
  artifacts.downloadArtifact(github, context, workspace)
}
 
module.exports = main