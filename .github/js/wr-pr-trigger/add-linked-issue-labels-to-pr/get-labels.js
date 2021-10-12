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
  const artifactJSON = JSON.parse(artifacts.readArtifact(fileName))
  const issueNum = artifactJSON.issueNumber
  const prNum = artifactJSON.prNumber
  console.log('issue: ', issueNum)
  console.log('pr: ', prNum)
  const response = listLabelsOnIssue(github, context, issueNum)
  const labels = response.map(data => data.name)
  console.log(`Labels found on issue: ${labels.join(', ')}`)
 }
  
 module.exports = main