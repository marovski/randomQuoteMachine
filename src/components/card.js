import React,{Component} from 'react';
import '../css/style.css'



//Functional Component
// const Header=()=>{

//     return <div>The Name is Jesus</div>
// }



//Class Component
class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
      firstQuote:this.props.quote[Math.floor(Math.random() * 10)]
    };
   this.generate=this.generate.bind(this);
    }
    generate(){
      this.setState(state=>({
        firstQuote:this.props.quote[Math.floor(Math.random()*10)]
        }));}
        
    render(){
      var quote=this.state.firstQuote;
    return(
        <div id="quote-box">
        <h5>Random Quote MachineGun</h5>
        <div id="text">
        
         <h2><i class="fa fa-quote-left"></i> {quote.text}</h2> 
        </div>
        <br />
        <div id="quote-author">
        <h4>  <span id="author">{quote.author}</span></h4>
      
          
        </div>

        <div id="buttons">
    <button id="tweet-quote" > <a 
  href={'https://twitter.com/intent/tweet?text=' + '"'+ quote.text +'" ' + quote.author}
  data-size="large" target="_blank" rel="noopener noreferrer">
<i class="fa fa-twitter" aria-hidden="true"></i></a></button>
          <button id="new-quote" onClick={this.generate}>
            Generate
          </button>

        
        </div>
      </div>
    )}
}

export default Card;