import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';



class Keypad extends Component{
  constructor(){
    super();
    this.state = {
      present: '',
      operator: '',
      output: ''
    };
  }

  _clickData(value){
    let store = this.state;
    if( Number.isInteger( value ) ){
      if( this.state.present && this.state.operator ){
        var operators = {
            '+': function(a, b) { return a + b },
            '-': function(a, b) { return a - b },
            '*': function(a, b) { return a * b },
            '/': function(a, b) { return a / b },
        };
        store.output = operators[this.state.operator]( store.present, value )
        store.present = store.output
      }else{
        store.present = value;
      }
    }else{
      store.operator = value
    }
    this.setState( store )
  }
  
  render(){
    const keypad = [ 0,1,2,3,4,5,6,7,8,9,'+', '-', '*', '/' ];
    return(
      <div className='warp-keypad'>
        <h1>Sample Calculator</h1>
        {
          keypad.map((value,index)=>{
            return <button key={index} onClick={() => this._clickData(value)} >{value}</button>
          })
        }
        <br/>Present={this.state.present}
        <br/>Operator={this.state.operator}
        <br/>Output={this.state.output}
      </div>
    )
  }
}

ReactDOM.render( <Keypad/>, document.getElementById('root') );

