function onClosed(data) {
  if (!data.pull_request.merged) {
    return;
  }
  moveCard(data.number, RELEASE_COMPLETE);
}
