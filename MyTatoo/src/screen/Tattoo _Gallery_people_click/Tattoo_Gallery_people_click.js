import React, { Component } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import styles from './styles';
import { observer, inject } from 'mobx-react';

@inject('store')
export class Items extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.flexImage, { backgroundColor: 'red' }]}>
          <Image source={this.props.store.Images} style={styles.imgStyles} />
        </View>
      </View>
    );
  }
}

@inject('store')
@observer
export default class MyTatoo extends Component {
  render() {
    const list = this.props.store.Images;
    return (
      <View style={[styles.container]}>
        <FlatList
          horizontal={false}
          numColumns="2"
          style={{ flex: 1 }}
          data={list}
          keyExtractor={(item, index) => index + ''}
          renderItem={({ item, index }) => {
            return <Items item={item} />;
          }}
        />
      </View>
    );
  }
}
