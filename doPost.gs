/**
 * GitHubのWebHookからPOSTされると呼び出される
 *
 * @param data {JSON} GitHubのWebHookからPOSTされたデータ
 */
function doPost(data) {
  data = JSON.parse(data.postData.contents);
  switch (data.action) {
    case 'opened':
      onOpened(data.pull_request);
      break;
    case 'labeled':
      onLabeled(data.pull_request, data.label);
      break;
    case 'closed':
      onClosed(data.pull_request);
      break;
  }
}
