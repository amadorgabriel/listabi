import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native'

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home/Minha lista</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})