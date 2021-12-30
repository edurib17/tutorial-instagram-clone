import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.1,
  },
  header_post: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  avatar_post: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  text_name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  icon_more: {
    fontSize: 20,
  },
  container_image_post: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
  },
  container_icons_end: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  container_icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_heart: like => ({
    paddingRight: 10,
    fontSize: 20,
    color: like ? 'red' : 'black',
  }),
  icon_chat: {
    fontSize: 20,
    paddingRight: 10,
    color: 'black',
  },
  icon_message: {
    fontSize: 20,
    color: 'black',
  },
  icon_save: {
    fontSize: 20,
    color: 'black',
  },
  container_post_end: {
    paddingHorizontal: 15,
  },
  container_comment: {
    flexDirection: 'row',
  },
  text_name_post: {
    color: 'black',
    fontWeight: '900',
    fontSize: 14,
    paddingVertical: 2,
  },
  text_post: {
    fontWeight: '700',
    fontSize: 14,
    color: 'gray',
    paddingVertical: 2,
  },
  container_add_comment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sub_container_add_comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_avatar_comment: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginRight: 10,
  },
  container_icon_input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji_happy: {
    fontSize: 15,
    color: 'gray',
  },
});

export default styles;
