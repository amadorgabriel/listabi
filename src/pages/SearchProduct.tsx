import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export const SearchProduct = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>Pesquisar Produtos</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})