import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { format } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";

import fonts from "../../styles/fonts"
import colors from "../../styles/colors"

import LogoImg from "../../assets/logo.svg";

export const Header = () => {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR
  });

  return (
    <View style={styles.container}>
      <LogoImg width={25} height={25} style={styles.logo} />

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
    justifyContent: 'space-between'
  },
  logo: {
    opacity: 0.8
  },
  date: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.light_text,
    textTransform: 'capitalize'
  }
})