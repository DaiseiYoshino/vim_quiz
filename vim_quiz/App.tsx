import {React} from './deps.ts';
import ConsoleWindow from './components/consoleWindow.tsx'

class App extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <>
        <link rel={'stylesheet'} href={'./static/css/App.css'}/>
        <div className="App">
          <ConsoleWindow text={[{style: 'blink', animationNum:1, text: 'H'}, {text: 'ello, world'}, {style: 'blink', animationNum:2, text:'!'}]}/>
        </div>
      </>
    );
  }
}

export default App;
