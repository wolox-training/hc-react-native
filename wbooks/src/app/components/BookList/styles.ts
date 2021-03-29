import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.polar,
    flex: 1
  },
  firstItem: {
    marginTop: 17
  },
  emptyListText: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center'
  }
});
