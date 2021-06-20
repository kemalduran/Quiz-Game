import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import QuizPage from './components/QuizPage';
import AuthRoute from "./components/AuthRoute";
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div>
          <AuthRoute path="/" type="guest">
            <LoginPage />
          </AuthRoute>
          <AuthRoute path="/quiz" type="private">
            <QuizPage />
          </AuthRoute>
        </div>
      </div>
    );
  }
}

export default App;
