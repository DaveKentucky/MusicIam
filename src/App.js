// libraries
import { Routes, Route } from 'react-router-dom';
// styles
import './App.css';
// components
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Trackspage from './pages/tracks/trackspage.component';

function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route exact path='/' element={ <Homepage /> }/>
          <Route path='/tracks' element={ <Trackspage /> }/>
        </Routes>
    </div>
  );
};

export default App;
