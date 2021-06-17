import React from 'react';
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";

import { theme } from "../styles/colors"

import { Header } from '../components/Header/Index'
import { Card } from '../components/Card/Index'
import { H1, Text } from '../components/Typografy/Index'

export const Home:React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View>
          <H1>Minha Lista</H1>
          <Text.Subtitle>Você ainda não tem nenhuma lista com produtos.</Text.Subtitle>
        </View>
        <Card message="Que tal começar a adicionar produtos para compra?" />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  content: {
    height: 210,
    justifyContent: "space-between"
  }
})