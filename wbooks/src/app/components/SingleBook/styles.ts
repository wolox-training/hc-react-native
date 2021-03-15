import { StyleSheet } from 'react-native';
import { colors } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 1,
    height: 90,
    justifyContent: 'center',
    marginHorizontal: '5.33%',
    marginTop: 118,
    shadowColor: colors.black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  contentWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '5.33%'
  },
  bookCover: {
    height: 60,
    width: 39
  },
  textWrapper: {
    marginLeft: '5.33%'
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
