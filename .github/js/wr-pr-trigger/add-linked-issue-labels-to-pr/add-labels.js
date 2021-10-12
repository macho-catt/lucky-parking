/**
 * Global Variables
 */
 var github
 var context
 const labelsAPI = require('../../utils/labels.js')
  
  /**
   * Parses the Pull Request body for a linked issue, and returns it
   * @param {Object} g - github object  
   * @param {Object} c - context object 
   * @returns - returns the linked issue number
   */
async function main({g, c}, { prNumber, labels }) {
  github = g 
  context = c

  console.log('pr: ', prNumber)
  console.log('labels', labels)

  if (labels.length < 1) {
    return false
  }

  console.log('length of arr: ', labels.length)

  const response = labelsAPI.setLabels(github, context, prNumber, labels)

  console.log(response)
  if (response.status === 200){
    return true
  } else {
    return false
  }

 }
  
 module.exports = main