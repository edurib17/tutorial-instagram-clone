import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import storyInfo from '../../data/stories';

const Stories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container_scrollview}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View style={styles.container}>
              {data.id == 1 ? (
                <View style={styles.container_icon_plus}>
                  <Entypo name="circle-with-plus" style={styles.icon_plus} />
                </View>
              ) : null}
              <View style={styles.circle}>
                <Image source={{uri: data.image}} style={styles.avatar} />
              </View>
              <Text
                style={styles.name_stories(data.id)}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
