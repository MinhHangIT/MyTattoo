import React, { Component } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import styles from './styles';
import { observer, inject } from 'mobx-react';



export default class TattooGalleryClick extends Component {
  render() {

    return (
      <View style={[styles.container]}>
        <Text>Gallery_click</Text>
      </View>
    );
  }
}
