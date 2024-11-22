import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function AddMenuItemScreen({ route, navigation }: any) {
  const { setMenu } = route.params;
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    const newItem = { dishName, description, course, price: parseFloat(price) };
    setMenu((prevMenu: any[]) => [...prevMenu, newItem]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>
      <TextInput style={styles.input} placeholder="Dish Name" value={dishName} onChangeText={setDishName} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <RNPickerSelect
        onValueChange={(value) => setCourse(value)}
        items={[
          { label: 'Starters', value: 'Starters' },
          { label: 'Mains', value: 'Mains' },
          { label: 'Deserts', value: 'Deserts' },
        ]}
        placeholder={{ label: 'Select Course', value: null }}
      />
      <TextInput style={styles.input} placeholder="Price" keyboardType="numeric" value={price} onChangeText={setPrice} />
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, marginBottom: 8, padding: 8, borderRadius: 4 },
});
