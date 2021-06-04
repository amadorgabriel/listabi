import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export const Extract = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text>Extrato</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})