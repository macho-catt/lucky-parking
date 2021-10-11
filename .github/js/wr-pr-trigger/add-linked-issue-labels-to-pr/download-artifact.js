/**
 * Global Variables
 */
 var github
 var context
 
 /**
  * Parses the Pull Request body for a linked issue, and returns it
  * @param {Object} g - github object  
  * @param {Object} c - context object 
  * @returns - returns the linked issue number
  */
 async function main({g, c}, workspace) {
   github = g
   context = c

  console.log('context: ', context)
  // Retrieve metadata about the artifacts of the last workflow
  // https://octokit.github.io/rest.js/v18#actions-list-workflow-run-artifacts
  /*
  const artifacts = await github.actions.listWorkflowRunArtifacts({
    owner: context.repo.owner,
    repo: context.repo.repo,
    run_id: context.payload.workflow_run.id,
  });
  console.log('array: ', artifacts.data.artifacts)
  const artifactData = artifacts.data.artifacts[0]
  console.log('artifact data: ', artifactData)

  // Download artifact with GET API
  // https://octokit.github.io/rest.js/v18#actions-download-artifact
  const download = await github.actions.downloadArtifact({
    owner: context.repo.owner,
    repo: context.repo.repo,
    artifact_id: artifactData.id,
    archive_format: 'zip',
  });

  const fs = require('fs')
  fs.writeFileSync(`${workspace}/add-linked-issue-labels-to-pr.zip`, Buffer.from(download.data))
  */
 }
 
 module.exports = main