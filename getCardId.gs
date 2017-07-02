function getCardId(pullRequestId) {
  var columnIds = [UNCATEGORIZED, IN_IMPLEMENTATION, REVIEW_PENDING, SELF_TEST_PENDING, TEST_PENDING, RELEASE_PENDING, RELEASE_COMPLETE];
  for (var n = 0; n < columnIds.length; n++) {
    var cards = getCardList(columnIds[n]);
    for (var m = 0;m < cards.length; m ++) {
      if (cards[m].content_url.indexOf(pullRequestId) !== -1) {
        return cards[m].id;
      }
    }
  }
}

function getCardList(columnId) {
  var headers = {
    "Accept" : "application/vnd.github.inertia-preview+json"
  };
  var options = {
    "method" : "GET",
    "headers" : headers
  };
  var url = "https://api.github.com/projects/columns/" + columnId + "/cards?access_token=取得したトークン";
  return JSON.parse(UrlFetchApp.fetch(url, options));
}
