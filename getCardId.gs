/**
 * @param pullRequestId {number} プルリクのID
 * @returns {number} プルリクのカードのID
 */
function getCardId(pullRequestId) {
  var columnIds = Object.keys(Column).map(function (key) {return Column[key]});
  for (var n = 0; n < columnIds.length; n++) {
    var cards = getCardList(columnIds[n]);
    for (var m = 0; m < cards.length; m++) {
      if (cards[m].content_url.indexOf(pullRequestId) !== -1) {
        return cards[m].id;
      }
    }
  }
}

/**
 * @param columnId カラムID
 * @return {JSON}
 */
function getCardList(columnId) {
  return gitHubApi(columnId + "/cards", "GET");
}
