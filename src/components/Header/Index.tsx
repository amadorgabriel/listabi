import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { format } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";


import fonts from "../../styles/fonts"
import colors from "../../styles/colors"

export const Header = () => {

  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR
  });

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo}/>

      <Text style={styles.date}>{currentDate}</Text>
    </ View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  logo: {
    width: 80,
    height: 80,
    opacity: 0.6
  },
  date: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.light_text,
    textTransform: 'capitalize'
  }
})