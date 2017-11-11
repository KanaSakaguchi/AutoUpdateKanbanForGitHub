function onLabeled(pull_request, label) {
  switch (label.name) {
    case "レビュー待ち":
      moveCard(pull_request.number, Column.REVIEW_PENDING);
      break;
    case "レビュー後改修中":
    case "テスト後改修中":
      moveCard(pull_request.number, Column.IN_IMPLEMENTATION);
      break;
    case "セルフテスト待ち":
      moveCard(pull_request.number, Column.SELF_TEST_PENDING);
      break;
    case "テスト待ち":
      moveCard(pull_request.number, Column.TEST_PENDING);
      break;
    case "テスト済み":
      moveCard(pull_request.number, Column.REVIEW_PENDING);
      break;
  }
}
