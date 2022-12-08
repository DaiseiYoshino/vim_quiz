import {React} from './deps.ts';
import ConsoleWindow from './components/consoleWindow.tsx'
import mainFunc from './functions/main.ts';
import keyHandler from './functions/keyHandler.ts';

class App extends React.Component {
  private mainFunc: Generator<any[], any, any>;
  private keyHandler: Generator<string[], any, any>;
  private state: {
    consoleContent: Array<string | {style?: string, animationNum?: number, text: string}>
  };

  constructor (props) {
    super(props);
    this.mainFunc = mainFunc();
    this.keyHandler = keyHandler();

    this.state = {
      consoleContent: this.mainFunc.next().value
    };
  }

  keyPress(e: any): void { // ちゃんと型書きたい
    this.keyHandler.next(e);// 送信用
    let keyArray = this.keyHandler.next().value;// 受信用
    let consoleContent = keyArray;
    if (keyArray.slice(-1)[0] == 'Enter') {// 最後の入力がEnterだった場合
      consoleContent = this.mainFunc.next(keyArray).value;
      this.keyHandler.next('RESET');// リセット用コマンド
    }
    this.setState(
      () => {
        return {
          consoleContent: consoleContent
        }
      }
    );
  }

  render() {
    return (
      <>
        <link rel={'stylesheet'} href={'./static/css/App.css'}/>
        <div
          className="App"
          tabIndex={-1}
          onKeyDown={this.keyPress.bind(this)}
        >
          <ConsoleWindow
            text={this.state.consoleContent}
          />
        </div>
      </>
    );
  }
}

export default App;
