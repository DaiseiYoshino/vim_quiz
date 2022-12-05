const keyConv = (key: string): string => {
  switch (key) {
    case 'Backspace':
      return 'BS';
    case 'Escape':
      return 'Esc';
  }
  return key;
};

function* keyHandler() {
  let stack: string[] = [];
  let input: string = '';
  while (true) {
    input = yield stack;
    stack.push(keyConv(input));
  }
}

export default keyHandler;
