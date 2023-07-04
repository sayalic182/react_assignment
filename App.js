import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from './Slider';

const App = () => {
  const sliders = [
    {
      id: '1',
      width: 200,
      items: [
        { id: '1', type: 'text', label: 'Text 1' },
        { id: '2', type: 'image', imageUrl: 'https://example.com/image1.png' },
      ],
    },
    {
      id: '2',
      width: 300,
      items: [
        { id: '3', type: 'text', label: 'Text 2' },
        { id: '4', type: 'image', imageUrl: 'https://example.com/image2.png' },
      ],
    },
  ];

  const handleSliderChange = (updatedItem) => {
    console.log('Updated item:', updatedItem);
  };

  return (
    <View style={styles.container}>
      {sliders.map((slider) => (
        <Slider key={slider.id} width={slider.width} items={slider.items} onChange={handleSliderChange} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
