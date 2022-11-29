import {React} from './deps.ts';
import ConsoleWindow from './components/consoleWindow.tsx'

function App() {
  return (
    <>
      <link rel={'stylesheet'} href={'./static/css/App.css'}/>
      <div className="App">
        <ConsoleWindow/>
      </div>
    </>
  );
}

export default App;
