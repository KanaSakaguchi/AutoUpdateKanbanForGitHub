/**
 * マージされたらリリース完了に移動
 *
 * @param pull_request {JSON} プルリクエスト
 */
function onClosed(pull_request) {
  if (!pull_request.merged) {
    return;
  }
  moveCard(pull_request.number, Column.RELEASE_COMPLETE);
}
