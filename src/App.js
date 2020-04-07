import React from 'react';
import './App.css';
import RenderQuote from './RenderQuote';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="quote-box">
          <RenderQuote />            
      </div>
    );
  }
}

export default App;
