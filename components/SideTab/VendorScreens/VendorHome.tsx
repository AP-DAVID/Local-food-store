import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import VendorHeader from './VendorHomeComponent/VendorHeader';
import MenuSearch from '../MenuScreens/MenuHomeComponent/MenuSearch';
import MenuCategory from '../MenuScreens/MenuHomeComponent/MenuCategory';
import {Textin} from 'components/Shared/Reuse';
import VendorItems from './VendorHomeComponent/VendorItems';

type Props = {};

const VendorHome = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        className="px-2 py-7"
        contentContainerStyle={styles.scrollContent}>
        <VendorHeader />
        <MenuSearch />
        <Textin data="Choose a Vendor Catergory" classn="py-3 px-2" />
        <MenuCategory />
        <Textin data="Choose Vendors" classn="py-3 px-2" />
        <VendorItems />
      </ScrollView>
    </View>
  );
};

export default VendorHome;

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
