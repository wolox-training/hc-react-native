import { ImageProps } from 'react-native';
import libraryIcon from '@assets/ic_library.png';
import libraryIconActive from '@assets/ic_library_active.png';
import wishlistIcon from '@assets/ic_wishlist.png';
import wishlistIconActive from '@assets/ic_wishlist_active.png';

type TabIconType = {
  [key: string]: { active: ImageProps; inactive: ImageProps };
};

const TAB_ICONS: TabIconType = {
  Library: { active: libraryIconActive, inactive: libraryIcon },
  Wishlist: { active: wishlistIconActive, inactive: wishlistIcon }
};

export default TAB_ICONS;
