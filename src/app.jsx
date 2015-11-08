import React from "react";
import Counter from "./views/counter.js";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from './actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

class App extends React.Component {
    render() {
        return (
          <div className="greeting">
            <h1>Counter App</h1>
            <Counter />
          </div>
        );
    }
}

export default App;
