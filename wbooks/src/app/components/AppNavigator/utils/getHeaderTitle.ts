import { getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';
import { HomeType } from '@constants/screens';
import { RootStackParamList } from '@interfaces/navigatorParamLists';

function getHeaderTitle(route: RouteProp<RootStackParamList, HomeType>): string {
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
