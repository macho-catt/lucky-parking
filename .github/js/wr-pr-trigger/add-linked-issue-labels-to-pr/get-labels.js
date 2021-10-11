/**
 * Global Variables
 */
 var github
 var context
 const artifacts = require('../../utils/artifacts.js')
 const listLabelsOnIssue = require('../../utils/list-labels.js')
  
  /**
   * Parses the Pull Request body for a linked issue, and returns it
   * @param {Object} g - github object  
   * @param {Object} c - context object 
   * @returns - returns the linked issue number
   */
function main({g, c}, workspace) {
  github = g 
  context = c
  const fileName = `${workspace}/artifact.txt`
  const issueNum = artifacts.readArtifact(fileName)
  console.log('issue: ', issueNum)

  const labels = listLabelsOnIssue(github, context, issueNum)
  console.log(labels)
 }
  
 module.exports = main