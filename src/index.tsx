import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

import './styles/styles.css';


class App extends Component {
    render() {
      return (
        <Home/>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById("root"));