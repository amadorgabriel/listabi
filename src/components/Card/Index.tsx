import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  children: Text
}

export const Card: React.FC<CardProps> = ({ children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'green',
    fontSize: 18
  },
});
