var github
var context
const findLinkedIssue = require('../utils/find-linked-issue.js')

/**
 * 
 */
function main({g, c}) {
  github = g
  context = c
  // console.log('issue num:', context.payload.issue.number)
  // console.log('payload:', context.payload.body)
  // figure out json tree for either github or context go get PR number
  // otherwise pull it from the env outside the js file


  // console.log(github.event.pull_request)
  const body = context.payload.pull_request.body
  console.log(`body: ${body} | type: ${typeof(body)}`)
  const issueNumber = findLinkedIssue(body)
  console.log(issueNumber)
  return issueNumber
}

module.exports = main