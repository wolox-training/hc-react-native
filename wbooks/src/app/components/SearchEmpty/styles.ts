import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

const SEARCH_ICON_SIZE = 50;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.polar,
    flex: 1,
    justifyContent: 'center'
  },
  searchIcon: {
    height: SEARCH_ICON_SIZE,
    marginBottom: 20,
    width: SEARCH_ICON_SIZE
  },
  primaryTitle: {
    fontSize: 15,
    marginBottom: 12
  },
  secondaryTitle: {
    color: colors.tundora,
    fontSize: 15
  }
});
