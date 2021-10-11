const fs = require('fs')

async function downloadArtifact(github, context, workspace) {
  // Retrieve metadata about the artifacts of the last workflow
  // https://octokit.github.io/rest.js/v18#actions-list-workflow-run-artifacts
  const artifacts = await github.rest.actions.listWorkflowRunArtifacts({
    owner: context.repo.owner,
    repo: context.repo.repo,
    run_id: context.payload.workflow_run.id,
  });
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
  });

  fs.writeFileSync(`${workspace}/add-linked-issue-labels-to-pr.zip`, Buffer.from(download.data))
}

module.exports = { downloadArtifact }