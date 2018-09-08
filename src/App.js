import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Calculator from './components/Calculator';
import Header from './components/Header';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer
)

class App extends Component {

  render() {
    return (
      <Provider store={ store }>
          <div>
            <Header />
            <Calculator />
          </div>
      </Provider>
    );
  }
}

export default App;