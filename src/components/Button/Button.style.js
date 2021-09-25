import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eb4d4b',
    padding: 7,
    flexDirection: 'row',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 2 - 25,
  },
  text: {
    color: '#fff',
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});
