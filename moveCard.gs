/**
 * プルリクのカードを移動する
 *
 * @param pullRequestId {number} プルリクのID
 * @param columnId      {number} カード移動先カラムのID
 */
function moveCard(pullRequestId, columnId) {
  var payload = JSON.stringify({
    "position": "top",
    "column_id": columnId
  });
  var cardId = getCardId(pullRequestId);
  gitHubApi("cards/" + cardId + "/moves", "POST", payload);
}
