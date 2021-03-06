// libraries
import { Routes, Route } from 'react-router-dom';
// styles
import './App.css';
// components
import Layout from './pages/layout/layout.component'
import Homepage from './pages/homepage/homepage.component';
import Trackspage from './pages/tracks/trackspage.component';
import Artistspage from './pages/artists/artistspage.component';
import Errorpage from './pages/errorpage/errorpage.component';
import Track from './pages/track/track.component';


function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route path='/' element={ <Homepage /> }/>
            <Route path='songs' element={ <Trackspage /> }/>
            <Route path='artists' element={ <Artistspage /> }/>
            <Route path='songs/:trackId' element={ <Track /> }/>
          </Route>
          <Route path='*' element={ <Errorpage /> }/>
        </Routes>
    </div>
  );
};

export default App;
