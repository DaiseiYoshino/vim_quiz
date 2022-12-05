import {React} from './deps.ts';
import ConsoleWindow from './components/consoleWindow.tsx'
import mainFunc from './functions/main.ts';
import keyHandler from './functions/keyHandler.ts';

class App extends React.Component {
  private mainFunc;
  private keyHandler;
  private state: {
    consoleContent: Array<string | {style?: string, animationNum: number, text: string}>
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
    const keyArray = this.keyHandler.next(e.key).value;
    this.setState(
      () => {
        return {
          consoleContent: keyArray
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
