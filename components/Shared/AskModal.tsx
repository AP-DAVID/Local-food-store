/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

type Props ={
    modalVisible : any;
    setModalVisible : any;
    text : string;
    YesPress : any;
}
const AskModal = ({modalVisible, setModalVisible, text, YesPress} : Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text className='tracking-wider' style={styles.modalText}>{text}</Text>
            <View className="flex-row space-x-7 justify-between px-2 py-2">
              <Pressable onPress={YesPress} className="px-3 py-2 bg-blue-500 rounded-md shadow-md">
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                className="px-3 py-2 bg-blue-500 rounded-md shadow-md">
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Montserrat-bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily : "Montserrat-Regular"
  },
});

export default AskModal;
