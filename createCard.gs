function createCard(pullRequestId, columnId) {
  var payload = {
    "content_id": pullRequestId,
    "content_type": "PullRequest"
  };
  return gitHubApi(columnId + "/cards", "POST", payload);
}
