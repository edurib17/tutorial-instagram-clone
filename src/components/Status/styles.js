import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line_horizontal: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
  },
  line_horizontal_half: progressAnimation =>({
    height: '100%',
    backgroundColor: 'white',
    width: progressAnimation,
  }),
  container_avatar_stories: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width:"90%",
  },
  sub_container_avatar_stories: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_avatar: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
  },
  container_text: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  text_name: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  icon_close: {
    fontSize: 20,
    color: 'white',
    opacity: 0.6,
  },
  image_status: {
    position: 'absolute',
    width: '100%',
    height: 500,
  },
  container_text_input: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
  text_input: {
    borderColor: 'white',
    borderRadius: 25,
    width: '85%',
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    fontSize: 20,
    color: 'white',
  },
  icon_message: {
    fontSize: 30,
    color: 'white',
  },
});

export default styles;

