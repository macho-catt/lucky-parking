/**
 * Parses a text and returns any found linked issue
 * @param {string} text - Body of text from PR
 * @returns - Returns the issue number, or false
 */
 async function listLabelsOnIssue(github, context, issueNum) {
  // GET request to retrieve data from results of request
  // https://octokit.github.io/rest.js/v18#issues-list-labels-on-issue
  try {
    const response = await github.rest.issues.listLabelsOnIssue({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: issueNum,
    })
    return response.data
  }
  catch(err) {
    console.log('Error with GET Request to get labels')
    console.log(err)
    return false
  }
}

module.exports = listLabelsOnIssue