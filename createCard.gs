/**
 * 指定されたカラムにプルリクのカードを作成
 *
 * @param pullRequestId {number} プルリクのID
 * @param columnId      {number} カード配置先カラムのID
 * @returns {JSON} API実行結果
 */
function createCard(pullRequestId, columnId) {
  var payload = {
    "content_id": pullRequestId,
    "content_type": "PullRequest"
  };
  return gitHubApi(columnId + "/cards", "POST", payload);
}
