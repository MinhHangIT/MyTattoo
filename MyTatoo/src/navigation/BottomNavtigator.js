import React, { Component } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
// import MyPhoto from '../screen/MyPhotos/MyPhoto';
import MyTatoo from '../screen/MyTatoo/MyTatoo';
// import TattooGallery from '../screen/TattooGallery/TattooGallery';
export default class BottomNavigator extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <AppStackNavigate />;
  }
}
const AppStackNavigate = createBottomTabNavigator(
  {
    MyTattoo: {
      screen: MyTatoo
    }
    // TattooGallery: {
    //   screen: TattooGallery
    // },
    // MyPhoto: {
    //   screen: MyPhoto
    // }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: '#212526'
          }
        })
      },
      activeBackgroundColor: '#2C3134',
      showLabel: false,
      showIcon: true
    }
  }
);
