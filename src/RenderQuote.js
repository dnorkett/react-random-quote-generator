import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const quotes =[
    {
      quote: 'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',
      author: 'Johann Wolfgang von Goethe'
    },
    {
      quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
      author: 'Christopher Columbus'
    },
    {
      quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
      author: 'Aristotle'
    },
    {
      quote: 'If you can dream it, you can achieve it.',
      author: 'Zig Ziglar'
    },
    {
      quote: 'Build your own dreams, or someone else will hire you to build theirs.',
      author:'Farrah Gray'
    },
    {
      quote: 'The only way to do great work is to love what you do.',
      author:'Steve Jobs'
    },
    {
      quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
      author:'Helen Keller'
    },
    {
      quote: 'Remember no one can make you feel inferior without your consent.',
      author:'Eleanor Roosevelt'
    },
    {
      quote: 'The person who says it cannot be done should not interrupt the person who is doing it.',
      author:'Chinese Proverb'
    }
  ]


class RenderQuote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentQuote: '',
        currentAuthor: ''
      }
      this.randomize = this.randomize.bind(this)
    }
    
    randomize () {
      let expression = Math.floor(Math.random() * quotes.length)
      this.setState(state => (
        {
          currentQuote: quotes[expression].quote,
          currentAuthor: quotes[expression].author
        }
      ))
    }
    
    componentDidMount() {
      this.randomize();
    }
    
    render() {
      return (
        <div>
          <h1 id="text">{this.state.currentQuote}</h1>
          <p id="author" style={{textAlign:"right"}}>- {this.state.currentAuthor}</p>
          <div id="bottom-bar">        
            <a id="tweet-quote" href="twitter.com/intent/tweet"><i className="fa fa-twitter" id="twitter-icon"></i></a>                  
            <button id="new-quote" onClick={this.randomize}> New Quote</button>        
        </div>
        </div>      
      )
    }
}

export default RenderQuote;