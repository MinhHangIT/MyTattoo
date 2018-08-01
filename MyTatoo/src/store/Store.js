import { observable, action } from 'mobx';

export default class MyTattoo {
  @observable
  Images = [
    { img: require('../assets/images/cafe.jpg') },
    { img: require('../assets/images/apple.jpg') },
    { img: require('../assets/images/cafe.jpg') },
    { img: require('../assets/images/cafe.jpg') },
    { img: require('../assets/images/apple.jpg') },
    { img: require('../assets/images/cafe.jpg') },
    { img: require('../assets/images/apple.jpg') },
    { img: require('../assets/images/cafe.jpg') },
    { img: require('../assets/images/apple.jpg') },
    { img: require('../assets/images/cafe.jpg') }
  ];
}
