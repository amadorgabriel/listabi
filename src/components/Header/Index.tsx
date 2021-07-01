import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { fonts } from "../../styles/fonts";
import { theme } from "../../styles/colors";

import LogoImg from "../../assets/logo.svg";

interface HeaderProps {
  alternativeText?: string;
  style?: {}
}

export const Header = ({ alternativeText,  style, ...rest}: HeaderProps) => {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 15,
      marginBottom: 35,
      ...style
    },
    logo: {
      opacity: 0.9,
    },
    date: {
      fontFamily: `${fonts.text}`,
      fontSize: 18,
      color: `${theme.colors.typografy.paragraph.secondary}`,
      textTransform: alternativeText == undefined ? "capitalize" : "none" ,
    },
  });

  return (
    <View style={styles.container} {...rest}>
      <LogoImg width={25} height={25} style={styles.logo} />

      <Text style={styles.date} >
        {alternativeText == undefined ? currentDate : alternativeText}
      </Text>
    </View>
  );
};


