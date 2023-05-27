import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {vendors} from 'components/Shared/Vendors';
type Props = {};

const VendorItems = (props: Props) => {
  const renderCategories = () => {
    return vendors.map(vendor => (
      <Pressable style={styles.vendorCard} key={vendor?.name}>
        <Image style={styles.vendorImage} source={{uri: vendor.image}} />
        <Text style={styles.vendorName}>{vendor.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{vendor.rating}</Text>
          <Icon name="star" color="orange" size={16} />
          <Text style={styles.reviews}>({vendor.reviews} Reviews)</Text>
        </View>
      </Pressable>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>{renderCategories()}</View>
    </View>
  );
};

export default VendorItems;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  heading: {
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    // height: 150,
    width: '45%', // Adjust this value to determine the width of each grid item
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#e8ebe9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vendorCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 150,
    height: 200,
  },
  vendorImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  vendorName: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginRight: 5,
  },
  reviews: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#999',
  },
});
