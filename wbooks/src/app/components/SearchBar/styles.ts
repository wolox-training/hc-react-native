import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

const CLEAR_ICON_SIZE = 14;

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
    height: CLEAR_ICON_SIZE,
    tintColor: colors.manatee,
    width: CLEAR_ICON_SIZE
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
