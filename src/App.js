import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';
import './App.less';
import {connect} from 'react-redux';

import Counter from './components/Counter';
import {addVal} from './actions/counter';

class App extends Component {
  
  render() {
    console.log(this.props.count.count)
    return (
      <React.Fragment>
      <div className="App">
        <Counter count={this.props.count.count} addVal={addVal} />
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    count: store.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addVal: () => dispatch(addVal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
