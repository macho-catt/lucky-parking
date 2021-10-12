/** 
 * This file contains helper functions related to GitHub artifacts
*/

const fs = require('fs')
/**
 * Downloads a specific artifact from GitHub
 * @param {Object} g - github object  
 * @param {Object} c - context object 
 * @param {String} workspace - the current GitHub workspace directory path
 * @param {String} zipName - name of the zip file to download
 */
async function downloadArtifact(github, context, workspace, zipName) {
  // Retrieve metadata about the artifacts of the last workflow
  // https://octokit.github.io/rest.js/v18#actions-list-workflow-run-artifacts
  const artifacts = await github.rest.actions.listWorkflowRunArtifacts({
    owner: context.repo.owner,
    repo: context.repo.repo,
    run_id: context.payload.workflow_run.id,
  })
  console.log('array: ', artifacts.data.artifacts)
  const artifactData = artifacts.data.artifacts[0]
  console.log('artifact data: ', artifactData)

  // Download artifact with GET API
  // https://octokit.github.io/rest.js/v18#actions-download-artifact
  const download = await github.rest.actions.downloadArtifact({
    owner: context.repo.owner,
    repo: context.repo.repo,
    artifact_id: artifactData.id,
    archive_format: 'zip',
  })

  fs.writeFileSync(`${workspace}/${zipName}`, Buffer.from(download.data))
}

/**
 * @param {String} fileName - name of the file to read
 * @returns the body of the file if it exists
 */
function readArtifact(fileName) {
  // Retrieve pull request and issue number from downloaded artifact
  if (fs.existsSync(fileName)){
    const artifact = fs.readFileSync(fileName, 'utf8')
    console.log('artifact is ', artifact)
    return artifact
  }

  return false
}

module.exports = { 
  downloadArtifact, 
  readArtifact 
}