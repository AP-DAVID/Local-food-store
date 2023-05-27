import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Badge, Button} from '@rneui/themed';

type Props = {};

const VendorHeader = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}
      className="items-center py-6">
      <View>
        <Text className="text-lg" style={{fontFamily: 'Montserrat-Bold'}}>
          Search for Vendors
        </Text>
      </View>

      <View style={{position: 'relative'}}>
        <Icon name="cart-outline" size={26} color="black" />
        <Badge
          status="success"
          value={10}
          containerStyle={{position: 'absolute', top: -8, right: -8}}
        />
      </View>
    </View>
  );
};

export default VendorHeader;

const styles = StyleSheet.create({});
