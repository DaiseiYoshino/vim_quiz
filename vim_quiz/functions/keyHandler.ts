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

function* keyHandler() {
  let stack: string[] = [];
  let input: string = '';
  while (true) {
    input = yield stack;
    if (input != '') {
      stack.push(keyConv(input));
    }
  }
}

export default keyHandler;
