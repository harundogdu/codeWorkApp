import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  job: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    marginVertical: 2,
  },
  locations_container: {
    flexWrap: 'wrap',
  },
  locations: {
    backgroundColor: '#FF5C58',
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 2,
  },
  levels: {
    textAlign: 'right',
    color: '#FF5C58',
    fontWeight: '900',
  },
});
