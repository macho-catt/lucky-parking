/**
 * Global Variables
 */
 var github
 var context
 const artifacts = require('../../utils/artifacts.js')
 const labelsAPI = require('../../utils/labels.js')
  
  /**
   * Parses the Pull Request body for a linked issue, and returns it
   * @param {Object} g - github object  
   * @param {Object} c - context object 
   * @returns - returns the linked issue number
   */
async function main({g, c}, workspace) {
  github = g 
  context = c
  const fileName = `${workspace}/artifact.txt`
  const artifactJSON = JSON.parse(artifacts.readArtifact(fileName))

  const issueNum = artifactJSON.issueNumber
  const prNum = artifactJSON.prNumber
  const response = await labelsAPI.listLabelsOnIssue(github, context, issueNum)

  const labels = response.map(data => data.name)
  console.log(`Labels found on issue: ${labels.join(', ')}`)
  return {
    prNumber: prNum,
    labels: labels
  }
 }
  
 module.exports = main