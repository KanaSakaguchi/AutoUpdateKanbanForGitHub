# AutoUpdateKanbanForGitHub
## 概要
GitHubのプロジェクトを使った自動更新のカンバン。<br>
プルリクの状態を元に自動更新する。

GitHubのWebhookをGAS(Google Apps Script)で受信する。<br>
プルリクのタイトルやラベルを元に[Projects](https://developer.github.com/v3/projects/)APIを用いてプロジェクトのカード作成・移動を行う。

## 説明
[GitHubで自動更新のカンバン作ってみたい Webhook受信編 - Qiita](https://qiita.com/KanaSakaguchi/items/ccb3432a262cb723327a)<br>
[GitHubで自動更新のカンバン作ってみたい Pull requestイベント確認編 - Qiita](https://qiita.com/KanaSakaguchi/items/09a330cd361382b86c70)<br>
[GitHubで自動更新のカンバン作ってみたい プルリクとプロジェクトのカードを連動させる編 - Qiita](https://qiita.com/KanaSakaguchi/items/2ba20632d66fe7a3587e)<br>
