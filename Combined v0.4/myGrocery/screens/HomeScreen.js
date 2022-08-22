import React from 'react';
import Dashboard from '../src/screens/Dashboard';
import Search from '../src/screens/SearchScreen';
import Home from '../src/screens/HomeScreen';
import About from '../src/screens/AboutScreen';
import OrderHistory from '../src/screens/OrderHistoryScreen';
import Product_category from '../src/screens/ProductCategoryScreen';
import IndividualProductScreen from '../src/screens/IndividualProductScreen';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
import Profile from '../src/screens/ProfileScreen';
import Cart from '../src/screens/CartScreen';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// global.cart= []
// global.cartQuan=[]

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{ drawerPosition: 'left', headerShown: false, drawerStyle: { width: 350 } }}
      drawerContent={(props) => <Dashboard {...props} />}
    >
      <Drawer.Screen
        name="BottomTab"
        component={BottomTabs}
      />
    </Drawer.Navigator>
  )
}

const CatalogueScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Product_category" component={Product_category} />
      <Stack.Screen name="IndividualProductScreen" component={IndividualProductScreen} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {

  const getTabBarStyle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    let display = (routeName === 'Dashboard' || routeName === 'About' || routeName === 'Search') ? 'none' : 'flex';
    return { display }
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        // name="Catalogue"
        // component={CatalogueScreens}
        name="Hometab"
        component={ CatalogueScreens }
        options={({ route }) => ({
          // tabBarStyle: getTabBarStyle(route),
          title: '',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  backgroundColor: focused ? '#24CE85' : 'transparent',
                  height: 50,
                  width: 130,
                }}>
                <Text style={{ color: focused ? 'white' : '#24CE85' }}>
                  Catalogue
                </Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: '',
          headerShown: true,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  backgroundColor: focused ? '#24CE85' : 'transparent',
                  height: 50,
                  width: 130,
                }}>
                <Text style={{ color: focused ? 'white' : '#24CE85' }}>Cart</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profiletab"
        component={Profile}
        options={{
          title: '',
          headerShown: true,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  backgroundColor: focused ? '#24CE85' : 'transparent',
                  height: 50,
                  width: 130,
                }}>
                <Text style={{ color: focused ? 'white' : '#24CE85' }}>
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
      <DrawerNavigator />
  );
};

export default App;
