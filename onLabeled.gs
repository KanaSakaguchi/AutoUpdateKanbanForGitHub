function onLabeled(data) {
  switch (data.label.name) {
    case "レビュー待ち":
      moveCard(data.number, Column.REVIEW_PENDING);
      break;
    case "レビュー後改修中":
      moveCard(data.number, Column.IN_IMPLEMENTATION);
      break;
    case "セルフテスト待ち":
      moveCard(data.number, Column.SELF_TEST_PENDING);
      break;
    case "テスト待ち":
      moveCard(data.number, Column.TEST_PENDING);
      break;
    case "テスト後改修中":
      moveCard(data.number, Column.IN_IMPLEMENTATION);
      break;
    case "テスト済み":
      moveCard(data.number, Column.REVIEW_PENDING);
      break;
  }
}
