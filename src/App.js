import React from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
  render() {
    console.log(this.props, 'this.props')
    return (
      <div>
        <h1>Header {this.props.data.header}</h1>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.dataObj = {
      header: "Header from props...",
      content: "Content from props..."
   }
  }
  render() {
    var name = "Soumya";
    var i = 1;
    var myStyle = {
      fontSize: 100,
      color: '#FF0000'
    }
  
    return (
      <div>
        <div>
          {/*Multi line comment...*/}
          <h1 style={myStyle}>Header</h1>
          <h1>Hello WOrld</h1>
          <div>{name}--{i + 1}</div>

        </div>
        <div>    
       
          <Content /></div>
      </div>
    )
  };
}

export default App;
