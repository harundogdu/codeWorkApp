import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import Config from 'react-native-config';
import JobsCard from '../../components/JobsCard/JobsCard';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import styles from './Jobs.style';
import Button from '../../components/Button';
const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {data, error, loading} = useFetch(
    `${Config.API_URL}?page=${page}`,
    'results',
  );
  const handleJobItemPress = (id, name) => {
    navigation.navigate('JobsDetail', {id, name});
  };
  const renderJobsItem = ({item}) => (
    <JobsCard
      job={item}
      onPress={() => handleJobItemPress(item.id, item.name)}
    />
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderJobsItem} />
      <View style={styles.button_container}>
        <Button
          icon="arrow-left-bold"
          text="Previous Page"
          onPress={() =>
            setPage(prev => {
              if (prev <= 0) {
                return (prev = 50);
              } else {
                return prev - 1;
              }
            })
          }
          disabled={loading}
        />
        <Button
          icon="arrow-right-bold"
          text="Next Page"
          onPress={() =>
            setPage(prev => {
              if (prev >= 50) {
                return (prev = 0);
              } else {
                return prev + 1;
              }
            })
          }
          disabled={loading}
        />
      </View>
    </View>
  );
};

export default Jobs;
