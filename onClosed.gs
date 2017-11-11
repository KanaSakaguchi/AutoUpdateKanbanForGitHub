function onClosed(pull_request) {
  if (!pull_request.merged) {
    return;
  }
  moveCard(pull_request, Column.RELEASE_COMPLETE);
}
