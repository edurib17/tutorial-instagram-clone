import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  sub_container: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sub_container_icons:{
    flexDirection:"row",
    alignItems: 'center',
  },
  icon_plus: {
    fontSize: 24,
    color: 'black',
    paddingRight:15
  },
  icon_heart:{
    fontSize: 24,
    color: 'black',
    paddingRight:15
  },
  text_instagram: {
    fontFamily: 'Lobster-Regular',
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  icon_message: {
    fontSize: 24,
    color: 'black',
  },
});

export default styles;
