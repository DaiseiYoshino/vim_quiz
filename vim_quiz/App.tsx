import {React} from './deps.ts';
import ConsoleWindow from './components/consoleWindow.tsx'
import mainFunc from './functions/main.ts';

class App extends React.Component {
  private mainFunc;

  constructor (props) {
    super(props);
    this.mainFunc = mainFunc();

    this.state = {
      consoleContent: this.mainFunc.next().value
    };
  }

  keyPress(e: any): void { // ちゃんと型書きたい
    // console.log(e);
    this.setState(
      () => {
        return {
          consoleContent: this.mainFunc.next(e.key).value
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
