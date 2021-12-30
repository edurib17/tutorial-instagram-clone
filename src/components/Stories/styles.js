import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container_scrollview: {
    paddingVertical: 20,
  },
  container: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    position: 'relative',
  },
  container_icon_plus: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
  icon_plus: {
    fontSize: 20,
    color: '#405de6',
    backgroundColor: 'white',
    borderRadius: 100,
  },
  circle: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  name_stories:(id)=>({
    textAlign: 'center',
    fontSize: 12,
    opacity: id == 0 ? 1 : 0.5,
  })
});

export default styles;
