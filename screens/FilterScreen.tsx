import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MenuItem from '../components/MenuItem'; // Assuming you have a MenuItem component

// Define the type for a menu item
type MenuItemType = {
  dishName: string;
  description: string;
  course: string;
  price: number;
};

export default function FilterScreen({ route }: any) {
  const { menu }: { menu: MenuItemType[] } = route.params;
  const [filter, setFilter] = useState<string | null>(null);

  // Apply filter logic with explicit typing for 'item'
  const filteredMenu = menu.filter((item: MenuItemType) => item.course === filter);

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setFilter(value)}
        items={[
          { label: 'Starters', value: 'Starters' },
          { label: 'Mains', value: 'Mains' },
          { label: 'Deserts', value: 'Deserts' },
        ]}
        placeholder={{ label: 'Select Course to Filter', value: null }}
      />
      <FlatList
        data={filteredMenu}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
