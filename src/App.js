import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNumber, clearPin, changeLockStatus } from './actions';

import './App.scss';
import Board from './components/Board';  

const mapStateToProps = (state) => {
  console.log("mapStateToProps-app")
  console.log("enteredPin|",state.enteredPin,"|")
  // console.log(state.changePin.enteredPin)
  return {
    // enteredPin: state.changePin.enteredPin,      ********** if combined reducers, use this form  $$$$
    // savedPin: state.changePin.savedPin,
    // isLocked: state.changePin.isLocked

    enteredPin: state.enteredPin,     // if single reducer, use this form  $$$$
    savedPin: state.savedPin,
    isLocked: state.isLocked,
    errorMsg: state.errorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps-app")
  return {
    onNumberAdd: (value) => dispatch(addNumber(value)),     // need to include parameter $$$$
    onPinClear: () => dispatch(clearPin()),
    onLockChange: () => dispatch(changeLockStatus())
  }
}



class App extends Component {
  
  render() {        

    // get all props from store state, including state and actions
    const {  enteredPin, isLocked, errorMsg, onNumberAdd, onPinClear, onLockChange } = this.props;
    console.log("|",errorMsg,"|")

    let lightColor = isLocked ? "red" : "green";
    return (
      <div className="App">
          <div className="buttondiv">
            <Board 
              onaddnumber={(value) => onNumberAdd(value) } 
              onpinclear={onPinClear} 
              onlockchange={onLockChange} 
            />
          </div>
          <div className="rightdiv">
              <div className="textdiv">
                <input className="textinput"
                  value={enteredPin}
                  readOnly
                />   
                <label>{errorMsg}</label>             
              </div>
              <div>
                
              </div>
              <div className="checkboxdiv">
                              {/* use svg to draw a circle, how could it be responsive?? */}
                  <svg xmlns="http://www.w3.org/2000/svg">
                      {/* <circle cx="50" cy="50" r="10" stroke="black" fill={lightColor} />   */}
                      <circle cx="50%" cy="50%" r="10" stroke="black" fill={lightColor} />                      
                  </svg>
              </div>
            </div>
      </div>  

    );
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)
