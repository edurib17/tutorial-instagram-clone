import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const Status = ({route, navigation}) => {
  const {name, image} = route.params;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.line_horizontal}>
        <Animated.View
          style={styles.line_horizontal_half(
            progressAnimation,
          )}></Animated.View>
      </View>
      <View style={styles.container_avatar_stories}>
        <View style={styles.sub_container_avatar_stories}>
          <Image source={{uri: image}} style={styles.image_avatar} />
        </View>
        <View style={styles.container_text}>
          <Text style={styles.text_name}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close" style={styles.icon_close} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={{uri: image}} style={styles.image_status} />
      <View style={styles.container_text_input}>
        <TextInput
          placeholder="Enviar Mensagem"
          placeholderTextColor="white"
          style={styles.text_input}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="navigation" style={styles.icon_message} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
