import './App.css';
import { ReactComponent as AppName } from './assets/app-name.svg';
import TestComponent from './test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppName className='app-name'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestComponent />
    </div>
  );
}

export default App;
