import React from 'react';
import { render } from 'react-dom';
import TicTacToe from './TicTacToe';
import "./bootstrap.css";

const App = () => (
 
  <div class = "container">
    <h2 class = "display-4 text-center bg-danger text-light py-4">My App</h2>
    <TicTacToe/>
  </div>
);

render(<App />, document.getElementById('root'));
