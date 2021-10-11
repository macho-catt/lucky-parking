/**
 * Global Variables
 */
var github
var context
const findLinkedIssue = require('./.github/js/utils/find-linked-issue.js')

/**
 * Parses the Pull Request body for a linked issue, and returns it
 * @param {Object} g - github object  
 * @param {Object} c - context object 
 * @returns - returns the linked issue number
 */
function main({g, c}) {
  github = g
  context = c
  const body = context.payload.pull_request.body
  const issueNumber = findLinkedIssue(body)
  return issueNumber
}

module.exports = main