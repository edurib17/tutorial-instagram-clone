import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import postInfo from '../../data/post';
import styles from './styles';

//Icons
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View key={index} style={styles.container}>
            <View style={styles.header_post}>
              <View style={styles.avatar_post}>
                <Image
                  source={{uri: data.postPersonImage}}
                  style={styles.avatar}
                />
                <View style={{paddingLeft: 5}}>
                  <Text style={styles.text_name}>{data.postTitle}</Text>
                </View>
              </View>
              <Feather name="more-vertical" style={styles.icon_more} />
            </View>
            <View style={styles.container_image_post}>
              <Image source={{uri: data.postImage}} style={styles.image} />
            </View>
            <View style={styles.container_icons_end}>
              <View style={styles.container_icons}>
                <TouchableOpacity
                  onPress={() => setLike(like == false ? true : false)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={styles.icon_heart(like)}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={styles.icon_chat}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={styles.icon_message} />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={styles.icon_save} />
            </View>
            <View style={styles.container_post_end}>
              <Text>Likes {like ? data.likes + 1 : data.likes}</Text>
              <View style={styles.container_comment}>
                <Text style={styles.text_name_post}>{data.postTitle}</Text>
                <Text style={styles.text_post}> {data.text}</Text>
              </View>
              <Text>Ver todos os {data.comments} comentarios</Text>
              <View style={styles.container_add_comment}>
                <View style={styles.sub_container_add_comment}>
                  <Image
                    source={{
                      uri: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/prison-mike.jpg',
                    }}
                    style={styles.image_avatar_comment}
                  />
                  <TextInput
                    placeholder="Adicionar comentario"
                    style={{opacity: 0.5}}
                  />
                </View>
                <View style={styles.container_icon_input}>
                  <Entypo name="emoji-happy" style={styles.emoji_happy} />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
