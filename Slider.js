npx react-native init SliderComponent

import React, { useState } from 'react';
import { View, Text, Image, Pressable, Modal, StyleSheet, Button } from 'react-native';

const Slider = ({ width, items, onChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);

  const handlePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleModalSave = (updatedItem) => {
    setModalVisible(false);
    setSelectedItem(null);
    onChange(updatedItem);
  };

  const renderItem = (item, index) => {
    const isItemSelected = selectedItem && selectedItem.id === item.id;
    const itemStyle = isItemSelected ? styles.selectedItem : styles.item;

    return (
      <View key={item.id} style={itemStyle}>
        {item.type === 'text' && <Text>{item.label}</Text>}
        {item.type === 'image' && <Image source={{ uri: item.imageUrl }} style={styles.image} />}
        <Pressable onPress={() => handlePress(item)}>
          <Text>Parameter 2</Text>
        </Pressable>
      </View>
    );
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide">
        {/* Implement your bottom sheet or modal component for editing parameters */}
        <View style={styles.modalContainer}>
          <Button title="Save" onPress={() => handleModalSave(selectedItem)} />
          <Button title="Close" onPress={handleModalClose} />
        </View>
      </Modal>

      <Slider
        style={{ width, height: 40 }}
        minimumValue={0}
        maximumValue={24}
        step={1}
        value={sliderValue}
        onValueChange={handleSliderChange}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.itemsContainer}>
        {items.map(renderItem)}
      </View>

      <Button title="Add" onPress={() => console.log('Add button clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
  },
  selectedItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ffdd00',
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Slider;
