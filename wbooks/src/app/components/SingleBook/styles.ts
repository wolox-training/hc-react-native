import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 20,
    paddingHorizontal: 19,
    paddingVertical: 15,
    shadowColor: colors.black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  bookCover: {
    height: 60,
    width: 39
  },
  textWrapper: {
    flex: 1,
    marginLeft: 19
  },
  bookTitle: {
    color: colors.tundora,
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 20,
    marginBottom: 3
  },
  bookAuthor: {
    color: colors.tundora,
    fontSize: 15,
    letterSpacing: -0.24,
    lineHeight: 17.67
  }
});
