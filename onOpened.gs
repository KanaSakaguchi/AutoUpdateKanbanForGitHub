function onOpened(data) {
  if (data.pull_request.title.match(/\[WIP]/i)) {
    createCard(data.pull_request.id, IN_IMPLEMENTATION);
  } else {
    createCard(data.pull_request.id, UNCATEGORIZED);
  }
}
