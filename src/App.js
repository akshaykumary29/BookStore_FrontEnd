import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import MainPage from './pages/mainPage/MainPage';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import DisplayBook from './components/displayBook/DisplayBook';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Login /> 
      <Signup />      */}

      {/* <MainPage /> */}
      {/* <Book /> */}
      {/* <Card /> */}
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <DisplayBook /> */}

      <BrowserRouter>
        <Switch>
          <Route path='/' component={MainPage} exact />
          <Route path='/homepage' component={Home} />
          <Route path='/displayPage' component={DisplayBook} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
