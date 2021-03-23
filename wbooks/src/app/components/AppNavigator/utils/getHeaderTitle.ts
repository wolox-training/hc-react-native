import { getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';
import { LibraryType } from '@interfaces/screens';
import { RootStackParamList } from '@interfaces/navigatorParamLists';

function getHeaderTitle(route: RouteProp<RootStackParamList, LibraryType>): string {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Library';

  switch (routeName) {
    case 'Library':
      return 'Library';
    case 'Wishlist':
      return 'Wishlist';
    default:
      return 'Library';
  }
}

export default getHeaderTitle;
