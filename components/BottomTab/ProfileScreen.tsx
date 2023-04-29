/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Profile Information</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>John Doe</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email Address:</Text>
          <Text style={styles.text}>johndoe@example.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Delivery Address:</Text>
          <Text style={styles.text}>123 Main St</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Order History:</Text>
          <Text style={styles.text}>Past Orders:</Text>
          <View style={styles.orderContainer}>
            <Text style={styles.order}>Order 1</Text>
            <Text style={styles.order}>Order 2</Text>
            <Text style={styles.order}>Order 3</Text>
            <Text style={styles.order}>Order 4</Text>
            <Text style={styles.order}>Order 5</Text>
            <Text style={styles.order}>Order 6</Text>
            <Text style={styles.order}>Order 7</Text>
            <Text style={styles.order}>Order 8</Text>
            <Text style={styles.order}>Order 9</Text>
            <Text style={styles.order}>Order 10</Text>
          </View>
          <Text style={styles.text}>Current Orders:</Text>
          <View style={styles.orderContainer}>
            <Text style={styles.order}>Order 11</Text>
            <Text style={styles.order}>Order 12</Text>
            <Text style={styles.order}>Order 13</Text>
            <Text style={styles.order}>Order 14</Text>
            <Text style={styles.order}>Order 15</Text>
            <Text style={styles.order}>Order 16</Text>
            <Text style={styles.order}>Order 17</Text>
            <Text style={styles.order}>Order 18</Text>
            <Text style={styles.order}>Order 19</Text>
            <Text style={styles.order}>Order 20</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  orderContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  order: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default ProfileScreen;
