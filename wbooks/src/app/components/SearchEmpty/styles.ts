import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.polar,
    flex: 1,
    justifyContent: 'center'
  },
  searchIcon: {
    height: 50,
    marginBottom: 20,
    width: 50
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
