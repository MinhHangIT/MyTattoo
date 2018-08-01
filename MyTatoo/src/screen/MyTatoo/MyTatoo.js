import React, { Component } from 'react';
import { View, Image, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { observer, inject } from 'mobx-react';

@inject('store')
export class Items extends Component {
  render() {
    return (
      <View style={[styles.flexImage]}>
        <Image source={this.props.item.img} style={styles.imgStyles} />
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
        <View style={styles.header}>
          <View style={{ flex: 1 }} />
          <View style={[styles.setCenter, { flex: 3 }]}>
            <Text style={{ fontSize: 16 }}>My tattoos</Text>
          </View>
          <View style={[styles.setCenter, { flex: 1 }]}>
            <TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{ flex: 4 }}>
          <View style={[styles.setCenter, styles.row, { flex: 1 }]}>
            <TouchableOpacity>
              <View style={[styles.flexImage, styles.setCenter, { backgroundColor: '#212526' }]}>
                <View style={[styles.setCenter, { marginBottom: 10 }]}>
                  <Image source={require('../../assets/icon/plus.png')} style={{ width: 25, height: 25 }} />
                </View>
                <View style={styles.setCenter}>
                  <Text style={{ color: 'white' }}>Add your tattoo</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.flexImage, styles.setCenter, { backgroundColor: '#212526' }]}>
                <View style={[styles.setCenter, { marginBottom: 10 }]}>
                  <Image source={require('../../assets/icon/A.png')} style={{ width: 25, height: 25 }} />
                </View>
                <View style={styles.setCenter}>
                  <Text style={{ color: 'white' }}>Create text tattoo</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3 }}>
            <FlatList
              horizontal={false}
              numColumns="2"
              data={list}
              keyExtractor={(item, index) => index + ''}
              renderItem={({ item, index }) => {
                return <Items item={item} />;
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
