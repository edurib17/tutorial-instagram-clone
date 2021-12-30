import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import styles from './styles';

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

//Components
import Stories from '../../components/Stories';
import Post from '../../components/Post';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View style={styles.sub_container}>
        <Text style={styles.text_instagram}>Instagram</Text>
        <View style={styles.sub_container_icons}>
          <FontAwesome name="plus-square-o" style={styles.icon_plus} />
          <AntDesign name="hearto" style={styles.icon_heart} />
          <Feather name="navigation" style={styles.icon_message} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;
