function onLabeled(data) {
  switch (data.label.name) {
    case "レビュー待ち":
      moveCard(data.number, REVIEW_PENDING);
      break;
    case "レビュー後改修中":
      moveCard(data.number, IN_IMPLEMENTATION);
      break;
    case "セルフテスト待ち":
      moveCard(data.number, SELF_TEST_PENDING);
      break;
    case "テスト待ち":
      moveCard(data.number, TEST_PENDING);
      break;
    case "テスト後改修中":
      moveCard(data.number, IN_IMPLEMENTATION);
      break;
    case "テスト済み":
      moveCard(data.number, REVIEW_PENDING);
      break;
  }
}
