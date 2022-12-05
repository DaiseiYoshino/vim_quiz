function* keyHandler() {
  let stack: {text: string}[] = [];
  let input: string = '';
  while (true) {
    input = yield stack;
    stack.push({text: input});
  }
}

export default keyHandler;
