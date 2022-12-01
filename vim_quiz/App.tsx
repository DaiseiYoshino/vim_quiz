import {React} from './deps.ts';
import ConsoleWindow from './components/consoleWindow.tsx'

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      consoleContent: [
        {style: 'blink', animationNum:1, text: 'H'},
        {text: 'ello, world'},
        {style: 'blink', animationNum:2, text:'!'}
      ]
    };
  }

  keyPress(e: any): void { // ちゃんと型書きたい
    // console.log(e);
    this.setState(
      () => {
        return {
          consoleContent: [
            {text: e.key}
          ]
        };
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
