import React from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import styles from './JobDetails.style';
import RenderHtml from 'react-native-render-html';
import {Dimensions} from 'react-native';
import Button from '../../components/Button';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';
const JobDetails = ({route}) => {
  const {id} = route.params;
  const {data, error, loading} = useFetch(`${Config.API_URL}/${id}`);
  const source = {
    html: `${data.contents}`,
  };
  const dispatch = useDispatch();
  const handleSubmitJob = () => {
    Alert.alert('Başarılı!', 'Başvurunuz başarıyla alınmıştır!');
  };

  const handleFavouriteJob = favouriteJob => {
    dispatch({type: 'ADD_FAVOURITE', payload: {favouriteJob}});
  };

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.header_text}>{data.name}</Text>
        <View style={styles.upper_location_container}>
          <Text style={styles.locations_left}>Locations : </Text>
          <Text style={styles.locations_right}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <View style={styles.upper_job_container}>
          <Text style={styles.job_left}>Job Level : </Text>
          <Text style={styles.job_right}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : 'Unknown Level'}
          </Text>
        </View>
        <Text style={styles.job_detail}>Job Detail</Text>
      </View>
      <View style={styles.info_container}>
        <RenderHtml
          baseStyle={styles.info_container_text}
          contentWidth={Dimensions.get('window').width}
          source={source}
        />
      </View>
      <View style={styles.button_container}>
        <Button icon="send" text="Submit" onPress={handleSubmitJob} />
        <Button
          icon="heart"
          text="Favourite Job"
          onPress={() => handleFavouriteJob(data)}
        />
      </View>
    </ScrollView>
  );
};

export default JobDetails;
