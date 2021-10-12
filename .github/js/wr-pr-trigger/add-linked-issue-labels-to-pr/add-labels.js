/**
 * Global Variables
 */
 var github
 var context
 const labelsAPI = require('../../utils/labels.js')
  
/**
 * Adds labels to the corresponding PR
 * @param {Object} g - github object  
 * @param {Object} c - context object 
 * @param {String} prNumber - pull request number
 * @param {Array} labels - array of labels
 * @returns - returns a boolean based on the result
 */
async function main({g, c}, { prNumber, labels }) {
  github = g 
  context = c

  // End action if issue does not have any labels
  if (labels.length < 1) {
    return false
  }

  const response = labelsAPI.setLabels(github, context, prNumber, labels)

  console.log(response)
  if (response.status === 200){
    return true
  } else {
    return false
  }

 }
  
 module.exports = main