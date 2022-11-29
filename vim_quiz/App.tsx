import {React} from './deps.ts';
import ConsoleWindow from './components/consoleWindow.tsx'

function App() {
  return (
    <>
      <link rel={'stylesheet'} href={'./static/css/App.css'}/>
      <div className="App">
        <ConsoleWindow text={[{style: 'blink-always', text: 'H'}, {text: 'ello, world'}]}/>
      </div>
    </>
  );
}

export default App;
