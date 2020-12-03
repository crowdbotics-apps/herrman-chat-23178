import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile181946Navigator from '../features/UserProfile181946/navigator';
import Tutorial181945Navigator from '../features/Tutorial181945/navigator';
import NotificationList181917Navigator from '../features/NotificationList181917/navigator';
import Settings181916Navigator from '../features/Settings181916/navigator';
import Settings181908Navigator from '../features/Settings181908/navigator';
import UserProfile181906Navigator from '../features/UserProfile181906/navigator';
import Settings181870Navigator from '../features/Settings181870/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile181946: { screen: UserProfile181946Navigator },
Tutorial181945: { screen: Tutorial181945Navigator },
NotificationList181917: { screen: NotificationList181917Navigator },
Settings181916: { screen: Settings181916Navigator },
Settings181908: { screen: Settings181908Navigator },
UserProfile181906: { screen: UserProfile181906Navigator },
Settings181870: { screen: Settings181870Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
