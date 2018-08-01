import React, { Component } from 'react';
import { Platform, Text, Image } from 'react-native';
import { createBottomTabNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import MyPhoto from '../screen/MyPhotos/MyPhoto';
import MyTatoo from '../screen/MyTatoo/MyTatoo';
import TattooGallery from '../screen/TattooGallery/TattooGallery';
import TattooGalleryClick from '../screen/Tattoo _Gallery_people_click/Tattoo_Gallery_people_click'
export default class BottomNavigator extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <AppStackNavigate />;
  }
}
const AppStackNavigate = TabNavigator(
  {
    MyTatoo: {
      screen: MyTatoo
    },
    TattooGallery: {
      screen: TattooGallery
    },
    TattooGalleryClick: {
      screen: TattooGalleryClick
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'MyTatoo':
            iconName = require('../assets/icon/like.png')
            break;
          case 'TattooGallery':
            iconName = require('../assets/icon/menu.png');
            break;
          case 'TattooGalleryClick':
            iconName = require('../assets/icon/check.png');
            break;
        }
        return <Image source={iconName} style={{ width: 20, height: 20, tintColor: focused ? 'white' : 'white' }} />;
      },
      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        let labelName;
        switch (routeName) {
          case 'MyTatoo':
            labelName = 'MyTatoo';
            break;
          case 'TattooGallery':
            labelName = 'TattooGallery';
            break;
          case 'TattooGalleryClick':
            labelName = 'TattooGalleryClick';
            break;
        }
        if (focused) {
          return <Text style={{ alignSelf: 'center', color: 'white' }}>{labelName}</Text>;
        }

        return <Text style={{ alignSelf: 'center', color: 'white' }}>{labelName}</Text>;
      }
    }),
    initialRouteName: 'MyTatoo',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: '#212526'
          }
        })
      }
    }
  }
);
