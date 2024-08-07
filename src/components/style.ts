import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 32, 
    height: '100%',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white'
  },
  formInput: {
    padding: 12, 
    color: 'white',
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: 'white',
    width: '70%', 
  },
  formSubmitBtn: {
    backgroundColor: 'cyan',
    padding: 12,
    color: '#fff',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    color: 'white'
  },
  courseItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 384,
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Android shadow property
    elevation: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: 16, 
    padding: 16, // 1rem -> 16px
    fontWeight: 'bold',
  },
  courseItemCol1: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },
  deleteBtn: {
    padding: 8, // 0.5rem -> 8px
    color: 'white',
    backgroundColor: '#ff0000cc',
    borderRadius: 5,
    borderWidth: 0,
    cursor: 'pointer', // not needed in React Native
  },
});

export default styles;
