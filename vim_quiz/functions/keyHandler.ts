const keyConv = (keyEvent: any): string => {
  const key: string = keyEvent.key;
  console.log(keyEvent);

  // 修飾キー単体の場合はパスする
  if (
    [
      'Shift',
      'Control',
      'Command',
      'Alt',
      'Meta'// MacとかLinuxだとある？
    ].includes(key)
  ) return '';

  switch (key) {
    case 'Backspace':
      return 'BS';
    case 'Escape':
      return 'Esc';
  }

  let ret: string = ''
  // 修飾キー周りの追加
  if (keyEvent.ctrlKey) ret += 'C-';
  if (keyEvent.altKey || keyEvent.metaKey) ret += 'M-';
  ret += key;
  return ret;
};

function* keyHandler(): Generator<string[], any, any> {
  let stack: string[] = [];
  let input: any = '';
  while (true) {
    input = yield stack;
    const convertedKey: string = keyConv(input);
    if (convertedKey != '') {
      stack.push(convertedKey);
    }
    if (convertedKey == 'Enter') {
      stack = [];
    }
  }
}

export default keyHandler;
