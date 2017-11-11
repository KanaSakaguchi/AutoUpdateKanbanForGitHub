function moveCard(pullRequestId, columnId) {
  var payload = JSON.stringify({
    "position": "top",
    "column_id": columnId
  });
  var cardId = getCardId(pullRequestId);
  gitHubApi("cards/" + cardId + "/moves", "POST", payload);
}
