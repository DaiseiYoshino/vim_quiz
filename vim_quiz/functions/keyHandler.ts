function* keyHandler() {
  let stack: string[] = [];
  let input: string = '';
  while (true) {
    input = yield stack;
    stack.push(input);
  }
}

export default keyHandler;
