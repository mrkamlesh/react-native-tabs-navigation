import React, { Component } from 'react';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home_Activity from './screens/Home_Activity';
import Profile_Activity from './screens/Profile_Activity';
import Details_Activity from './screens/Details_Activity';
import Settings_Activity from './screens/Settings_Activity';



const HomeTab = createStackNavigator(
  {
    Home: Home_Activity,
    Details: Details_Activity,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',

    },
  }
);

const SettingsTab = createStackNavigator(
  {
    Settings: Settings_Activity,
    Details: Details_Activity,
    Profile: Profile_Activity,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',

    },
  }
);

// const RootStack = createStackNavigator(
//   {
//     Product: Home_Activity,
//     ProductDetails: Profile_Activity
//   },
//   {
//     initialRouteName: 'Product',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#777777',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   },
// );


const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab,
    Settings: SettingsTab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        let iconString;

        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconString = focused ? require('./assets/home_icon.png') : require('./assets/settings_icon.png');
          // iconString = require('./assets/home_icon.png');

        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
          iconString = require('./assets/settings_icon.png')
        }

        // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
        return <Image source={iconString} style={{ width: 20, height: 20 }} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    }
  }
);

const RootContainer = createAppContainer(MainApp);

const App: () => React$Node = () => {
  return (
    <RootContainer />
  );
};

export default App;
