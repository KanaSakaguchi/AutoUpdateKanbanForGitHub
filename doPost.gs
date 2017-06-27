function doPost(data) {
  data = JSON.parse(data.postData.contents);
  switch (data.action) {
    case 'opened':
      onOpened(data);
      break;
    case 'labeled':
      onLabeled(data);
      break;
    case 'closed':
      onClosed(data);
      break;
  }
}
