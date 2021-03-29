import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 14,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 16
  },
  searchIconLeft: {
    height: 12,
    tintColor: colors.manatee,
    width: 13
  },
  clearIconRight: {
    height: 14,
    tintColor: colors.manatee,
    width: 14
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
