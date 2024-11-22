import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MenuItem({ item }: any) {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.dishName}</Text>
      <Text>{item.description}</Text>
      <Text>Course: {item.course}</Text>
      <Text>Price: R{item.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { padding: 8, borderBottomWidth: 1, borderColor: '#ccc' },
  name: { fontWeight: 'bold' },
});
