function moveCard(pullRequestId, columnId) {
  var headers = {
    "Accept" : "application/vnd.github.inertia-preview+json"
  };
  var payload = JSON.stringify({
    "position" : "top",
    "column_id" : columnId
  });
  var options = {
    "method" : "POST",
    "headers" : headers,
    "payload" : payload
  };
  var cardId = getCardId(pullRequestId);
  var url = "https://api.github.com/projects/columns/cards/" + cardId + "/moves?access_token=取得したトークン";
  UrlFetchApp.fetch(url, options);
}
