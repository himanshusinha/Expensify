const images = {
  one: require('../assets/images/one.png'),
  two: require('../assets/images/2.png'),
  three: require('../assets/images/3.png'),
  four: require('../assets/images/4.png'),
  five: require('../assets/images/5.png'),
  six: require('../assets/images/6.png'),
  seven: require('../assets/images/7.png'),
  eight: require('../assets/images/8.png'),
  nine: require('../assets/images/9.png'),
  ten: require('../assets/images/10.png'),
  eleven: require('../assets/images/11.png'),
  twelve: require('../assets/images/12.png'),
  banner: require('../assets/images/banner.png'),
  empty: require('../assets/images/empty.png'),
};

export default images;

export function randomImage() {
  const imageKeys = Object.keys(images);
  const randomIndex = Math.floor(Math.random() * imageKeys.length);
  const randomKey = imageKeys[randomIndex];
  return images[randomKey];
}
