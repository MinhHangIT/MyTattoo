import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { inject, observer } from 'mobx-react';

@inject('store')
export default class Items extends Component {
  render() {
    console.log(JSON.stringify(this.props.store.Images.img));
    return (
      <View style={[styles.container]}>
        <View style={[styles.row, { flex: 1 }]}>
          <View style={[styles.flexImage]}>
            <Image source={this.props.store.Images.img} style={styles.imgStyles} />
          </View>
          {/* <View style={[styles.flexImage]}>
            <Image source={this.props.store.Images.img} style={styles.imgStyles} />
          </View> */}
        </View>
      </View>
    );
  }
}
