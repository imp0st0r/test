import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import Component from './Components/Component';
import reducer from './store/reducer';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const mapStateToProps = (state) => {
  return {
    content: state.contentElements}
}

const WrappedComponent = connect(mapStateToProps)(Component)

ReactDOM.render(
  <Provider store={store}>
    <WrappedComponent />
  </Provider>, 
  document.getElementById('root')
);

