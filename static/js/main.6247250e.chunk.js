(this["webpackJsonpreact-random-quote-generator"]=this["webpackJsonpreact-random-quote-generator"]||[]).push([[0],{15:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(8),u=o.n(a),i=o(1),c=o(2),h=o(5),s=o(4),l=(o(7),o(3)),d=(o(14),[{quote:"Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",author:"Johann Wolfgang von Goethe"},{quote:"You can never cross the ocean until you have the courage to lose sight of the shore.",author:"Christopher Columbus"},{quote:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",author:"Aristotle"},{quote:"If you can dream it, you can achieve it.",author:"Zig Ziglar"},{quote:"Build your own dreams, or someone else will hire you to build theirs.",author:"Farrah Gray"},{quote:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{quote:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",author:"Helen Keller"},{quote:"Remember no one can make you feel inferior without your consent.",author:"Eleanor Roosevelt"},{quote:"The person who says it cannot be done should not interrupt the person who is doing it.",author:"Chinese Proverb"}]),m=function(e){Object(h.a)(o,e);var t=Object(s.a)(o);function o(e){var n;return Object(i.a)(this,o),(n=t.call(this,e)).state={currentQuote:"",currentAuthor:""},n.randomize=n.randomize.bind(Object(l.a)(n)),n}return Object(c.a)(o,[{key:"randomize",value:function(){var e=Math.floor(Math.random()*d.length);this.setState((function(t){return{currentQuote:d[e].quote,currentAuthor:d[e].author}}))}},{key:"componentDidMount",value:function(){this.randomize()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"text"},this.state.currentQuote),r.a.createElement("p",{id:"author",style:{textAlign:"right"}},"- ",this.state.currentAuthor),r.a.createElement("div",{id:"bottom-bar"},r.a.createElement("a",{id:"tweet-quote",href:"twitter.com/intent/tweet"},r.a.createElement("i",{className:"fa fa-twitter",id:"twitter-icon"})),r.a.createElement("button",{id:"new-quote",onClick:this.randomize}," New Quote")))}}]),o}(r.a.Component),b=function(e){Object(h.a)(o,e);var t=Object(s.a)(o);function o(e){return Object(i.a)(this,o),t.call(this,e)}return Object(c.a)(o,[{key:"render",value:function(){return r.a.createElement("div",{id:"quote-box"},r.a.createElement(m,null))}}]),o}(r.a.Component);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,o){},9:function(e,t,o){e.exports=o(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6247250e.chunk.js.map