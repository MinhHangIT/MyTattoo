import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import BottomNavigator from './navigation/BottomNavtigator';
import MyTattoo from './store/Store';
const store = new MyTattoo();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BottomNavigator {...this.props} />
      </Provider>
    );
  }
}
