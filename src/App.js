// libraries
import { Routes, Route } from 'react-router-dom';
// styles
import './App.css';
// components
import Layout from './pages/layout/layout.component'
import Homepage from './pages/homepage/homepage.component';
import Trackspage from './pages/tracks/trackspage.component';
import Errorpage from './pages/errorpage/errorpage.component';


function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route path='/' element={ <Homepage /> }/>
            <Route path='tracks' element={ <Trackspage /> }/>
          </Route>
          <Route path='*' element={ <Errorpage /> }/>
        </Routes>
    </div>
  );
};

export default App;
