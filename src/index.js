import React, { Component } from 'react';
import ReactDom from 'react-dom';


//Components Import

import Card from './components/card'
// import NewsList from './components/news_list'

class App extends Component{
state={
  isLoaded:false,
  quotes:[]
}

componentDidMount() {
  // var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  fetch( 'https://type.fit/api/quotes')
  .then(res => res.json())
  .then((data) => 
    this.setState({ quotes: data, isLoaded:true })
  
  )
  .catch(console.log)
}

  render(){
    // console.log(this.state.quotes)

    var {isLoaded, quotes}=this.state;

    if(!isLoaded) {

      return <div id="quote-box" ><h1 style={{textAlign:"center"}}>Loading...</h1></div>;
    }else{
      return (
  
        <div> 
        <Card quote={quotes}/>
        {/* <NewsList news={this.state.news} />    */}
        </div>
       
         )


    }
  
   
  }
}

ReactDom.render(<App/>, document.querySelector('#root'))