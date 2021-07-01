import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { theme } from "../styles/colors";
import { fonts } from "../styles/fonts";

import AbstractArt from "../assets/abstract-top-art.svg";

//componentes
import { LabelButton, IconLabelButton } from "../components/Button/Index";
import { OutlineInput } from "../components/Input/Index";
import { Display, Text as CustomText } from "../components/Typografy/Index";

export const Login: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.avoidView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <AbstractArt style={styles.topImage} />

          <View style={styles.content}>
            <View style={styles.title}>
              <Display>Login</Display>
              <CustomText.Subtitle>
                Faça o seu login agora mesmo é rápido e fácil!
              </CustomText.Subtitle>
            </View>

            <View>
              <View style={styles.inputView}>
                <OutlineInput
                  placeholder="Email"
                  onChange={() => {}}
                  style={styles.input}
                  variant="emailAddress"
                />
                <OutlineInput
                  placeholder="Senha"
                  onChange={() => {}}
                  style={styles.input}
                  variant="password"
                />
                <LabelButton
                  label="Vamos lá!"
                  onPress={() => navigate("Main")}
                  style={styles.button}
                  hasShadow
                />
              </View>

              <IconLabelButton
                label="Entrar com Google"
                color="white"
                hasShadow
                onPress={() => navigate("Main")}
              />
            </View>

            <View style={styles.account}>
              <CustomText.Small style={styles.noLogin}>
                Ainda não tem Login?{" "}
              </CustomText.Small>
              <Pressable onPress={() => navigate("SignUpName")}>
                <CustomText style={styles.boldText}>Cadastre-se</CustomText>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  avoidView: {
    flex: 1,
  },
  topImage: {
    width: Dimensions.get("window").width,
  },
  account: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25,
  },
  noLogin: {
    textAlign: "center",
    marginRight: 3,
  },
  boldText: {
    fontFamily: fonts.subtitle,
    color: theme.colors.typografy.paragraph.quartenary,
    fontSize: 15,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  title: {
    marginTop: 20,
    marginBottom: 25,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 8,
  },
  inputView: {
    marginBottom: 30,
  }
});
