const keyConv = (keyEvent: any): string => {
  // 受信用コマンドだった場合の処理
  if (typeof keyEvent == 'undefined') return '';

  // リセット用コマンドだった場合の処理
  if (typeof keyEvent == 'string' && keyEvent == 'RESET') return 'RESET';

  // それ以外のキーイベントオブジェクトが来た時の処理
  const key: string = keyEvent.key;

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

function* keyHandler(): Generator<string[][], any, any> {
  let stack: string[][] = [[]];
  let input: any = '';
  while (true) {
    input = yield stack;
    const convertedKey: string = keyConv(input);
    if (convertedKey != '') {
      stack[0].push(convertedKey);
    }
    if (convertedKey == 'RESET') {
      stack = [[]];
    }
  }
}

export default keyHandler;
