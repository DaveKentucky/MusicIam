import './App.css';
import { ReactComponent as AppName } from './assets/app-name.svg';
import TestComponent from './test';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <TestComponent />
    </div>
  );
}

export default App;
