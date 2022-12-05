function* keyHandler() {
  let stack = [];
  let input = '';
  while (true) {
    input = yield [{text: input}];
  }
}

export default keyHandler;
