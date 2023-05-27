/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from 'components/BottomTab/HomeScreen';
import OrderScreen from 'components/BottomTab/OrderScreen';
import ProfileScreen from 'components/BottomTab/ProfileScreen';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import Vendors from 'components/SideTab/Vendors';
import Menu from 'components/SideTab/Menu';
import Groups from 'components/SideTab/Groups';
import Rewards from 'components/SideTab/Rewards';
import Help from 'components/SideTab/Help';
import {useContext} from 'react';
import {DrawerContext} from 'components/context/DrawerContext';
import HomeScreenHeaderRight from 'components/Shared/HomeScreenHeaderRight';

const Tab = createMaterialBottomTabNavigator();

type Props = {
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};

const FirstPage = ({navigation: {navigate}}: Props) => {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'grey'}}
      activeColor="#000000"
      inactiveColor="white"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return (
            <Icon
              className="px-2 py-2"
              name={iconName}
              size={26}
              color={color}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{tabBarBadge: ''}}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function News() {
  const drawerIcon = ({focused, color, size}: any) => (
    <Icon name="home" size={15} color={color} />
  );

  const MenuIcon = ({focused, color, size}: any) => (
    <Icon name="grid-sharp" size={15} color={color} />
  );

  const VendorIcon = ({focused, color, size}: any) => (
    <Icon name="basket-outline" size={15} color={color} />
  );

  const [news, setNews] = useState([]);
  const {show, color} = useContext<any>(DrawerContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#000000',
          width: 240,
        },
        drawerInactiveTintColor: 'white',
        drawerLabelStyle: {
          fontFamily: 'Montserrat-SemiBold',
        },
      }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Feed"
        component={FirstPage}
        options={{
          title: 'Home',
          headerShown: show,
          headerRight: () => <HomeScreenHeaderRight />,
          drawerIcon,
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: color,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            color: '#000000',
          },
        }}
      />
      <Drawer.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Menu',
          headerShown: show,
          headerRight: () => <HomeScreenHeaderRight />,
          drawerIcon: MenuIcon,
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: color,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            color: '#000000',
          },
        }}
      />
      <Drawer.Screen
        name="Vendors"
        component={Vendors}
        options={{
          title: 'Vendors',
          headerShown: show,
          headerRight: () => <HomeScreenHeaderRight />,
          drawerIcon : VendorIcon,
          // headerTintColor: 'black',
          headerStyle: {
            backgroundColor: color,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            // color: '#000000',
          },
        }}
      />
      <Drawer.Screen name="Groups" component={Groups} />
      <Drawer.Screen name="Rewards" component={Rewards} />
      <Drawer.Screen name="Help" component={Help} />

      {/* <Drawer.Screen name="Notifications" component={Notifications} /> */}
    </Drawer.Navigator>
  );
}

export default News;
