function createCard(pullRequestId, columnId) {
  var headers = {
    "Accept" : "application/vnd.github.inertia-preview+json"
  };
  var payload = {
    "content_id" : pullRequestId,
    "content_type" : "PullRequest"
  };
  var options = {
    "method" : "POST",
    "headers" : headers,
    "payload" : JSON.stringify(payload)
  };

  var url = "https://api.github.com/projects/columns/" + columnId + "/cards?access_token=取得したトークン";

  return JSON.parse(UrlFetchApp.fetch(url, options));
}
