import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import JobsCard from '../../components/JobsCard';
import styles from './FavoritedJobs.style';
import Button from '../../components/Button';
const FavoritedJobs = ({navigation}) => {
  const job = useSelector(state => state.favouriteJob);
  const dispatch = useDispatch();
  const removeJobItems = item => {
    dispatch({type: 'REMOVE_FAVOURITE', payload: {job: item}});
  };
  const handleJobItemPress = (id, name) => {
    navigation.navigate('JobsDetail', {id, name});
  };
  const renderFavouriteItems = ({item}) => (
    <View style={styles.inner_container}>
      <JobsCard
        job={item}
        onPress={() => handleJobItemPress(item.id, item.name)}
      />
      <View style={styles.button_container}>
        <Button
          icon="delete"
          text="Remove Job"
          onPress={() => removeJobItems(item)}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={job}
      renderItem={renderFavouriteItems}
      style={styles.container}
    />
  );
};

export default FavoritedJobs;
