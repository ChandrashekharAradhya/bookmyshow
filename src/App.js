
import './App.css';
import Header from './components/Header';
import SliderImages from './components/SliderImages';
import CardSlider from './components/CardSlider';
import Premiere from './components/Premiere';
import Footer from './components/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
             <Route exact path="/">
                <SliderImages/>
                <CardSlider/>
                <Premiere/>
              </Route>
              <Route exact path="/movies">
                <AllMoviesFetch/>
              </Route>
              {/* <Route exact path="/movies/:movid">
                <SingleMovie/>
              </Route> */}
             
            </Switch>    
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
