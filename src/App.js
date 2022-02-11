import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import MainPage from './pages/mainPage/MainPage';
import Header from './components/header/Header';
import Book from './components/book/Book';
function App() {
  return (
    <div className="App">
      {/* <Login /> 
      <Signup />      */}

      {/* <MainPage /> */}
        <Book />
      {/* <Header /> */}
    </div>
  );
}

export default App;
