function gitHubApi(param, method, payload) {
  var headers = {
    "Accept": "application/vnd.github.inertia-preview+json"
  };
  var options = {
    "method": method,
    "headers": headers,
    "payload": JSON.stringify(payload)
  };
  var url = "https://api.github.com/projects/columns/" + param + "?access_token=取得したトークン";

  return JSON.parse(UrlFetchApp.fetch(url, options));
}
