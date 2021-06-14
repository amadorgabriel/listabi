import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { theme } from "../styles/colors"

import { Header } from '../components/Header/Index'
import { Button } from '../components/Button/Index'

export const Home:React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white ,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  }
})