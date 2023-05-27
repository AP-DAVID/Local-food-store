/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useContext, useEffect} from 'react';
import MenuHeader from './MenuHomeComponent/MenuHeader';
import MenuSearch from './MenuHomeComponent/MenuSearch';
import MenuCategory from './MenuHomeComponent/MenuCategory';
import MenuBottom from './MenuHomeComponent/MenuBottom';
import MenuItems from './MenuHomeComponent/MenuItems';
import {DrawerContext} from 'components/context/DrawerContext';

type Props = {
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};

const MenuHome = ({navigation: {navigate}}: Props) => {
  const {showDrawer} = useContext<any>(DrawerContext);
  useEffect(() => {
    showDrawer(true);
  }, [showDrawer]);
  return (
    <View style={styles.container}>
      <ScrollView
        className="px-2 py-7"
        contentContainerStyle={styles.scrollContent}>
        <MenuHeader />
        <MenuSearch />
        <MenuCategory />
        <MenuItems navigate={navigate} />
      </ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <MenuBottom />
      </View>
    </View>
  );
};

export default MenuHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // Adjust this value to accommodate the height of MenuBottom component
  },
});
