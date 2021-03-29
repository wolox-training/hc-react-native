import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 14,
    flexDirection: 'row',
    paddingHorizontal: 8
  },
  searchIcon: {
    height: 12,
    tintColor: colors.manatee,
    width: 13
  },
  clearIconActive: {
    tintColor: colors.monza
  },
  input: {
    height: 28,
    paddingVertical: 0,
    paddingHorizontal: 17,
    width: '93%'
  }
});
