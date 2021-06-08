import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native'

import { Header } from "../components/Header/Index"
import colors from "../styles/colors"

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home/Minha lista</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  }
})