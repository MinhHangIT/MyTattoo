import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default (styles = StyleSheet.create({
  container: {
    width: width,
    height: height
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexImage: {
    width: width * 0.496,
    height: (height * 2) / 9,
    margin: 1,
    alignItems: 'center'
  },
  imgStyles: {
    width: width * 0.49,
    height: (height * 2) / 9
  },
  header: {
    width: width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  setCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
