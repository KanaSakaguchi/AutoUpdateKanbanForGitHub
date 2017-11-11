function onOpened(pull_request) {
  if (pull_request.title.match(/\[WIP]/i)) {
    createCard(pull_request.id, Column.IN_IMPLEMENTATION);
  } else {
    createCard(pull_request.id, Column.UNCATEGORIZED);
  }
}
