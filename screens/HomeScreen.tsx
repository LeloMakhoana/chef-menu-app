import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import MenuItem from '../components/MenuItem';

export default function HomeScreen({ navigation }: any) {
  const [menu, setMenu] = useState<any[]>([]);

  const calculateAveragePrice = (course: string) => {
    const filteredItems = menu.filter((item) => item.course === course);
    const total = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return filteredItems.length ? (total / filteredItems.length).toFixed(2) : '0.00';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>
      <Button title="Add Menu Item" onPress={() => navigation.navigate('Add Menu Item', { setMenu })} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('Filter Menu', { menu })} />
      <FlatList
        data={menu}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.average}>Average Prices:</Text>
      <Text>Starters: {calculateAveragePrice('Starters')}</Text>
      <Text>Mains: {calculateAveragePrice('Mains')}</Text>
      <Text>Deserts: {calculateAveragePrice('Deserts')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  average: { marginTop: 16, fontSize: 18, fontWeight: 'bold' },
});