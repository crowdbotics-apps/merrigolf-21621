import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp13146570Navigator from '../features/SignUp13146570/navigator';
import Tutorial7146567Navigator from '../features/Tutorial7146567/navigator';
import UserProfile8146566Navigator from '../features/UserProfile8146566/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp13146570: { screen: SignUp13146570Navigator },
Tutorial7146567: { screen: Tutorial7146567Navigator },
UserProfile8146566: { screen: UserProfile8146566Navigator },

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
