import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { theme } from "../../styles/colors";
import { AntDesign } from "@expo/vector-icons";

import BottomAbstractArt from "../../assets/abstract-bottom-art.svg";

import { Header } from "../../components/Header/Index";
import { LabelButton } from "../../components/Button/Index";
import { OutlineInput } from "../../components/Input/Index";
import { H1, Text as CustomText } from "../../components/Typografy/Index";

export const PasswordSignUp: React.FC = () => {
  const { navigate } = useNavigation();
  const route: any = useRoute();

  return (
    <KeyboardAvoidingView
      style={styles.avoidView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
    >
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.container}>
              <Header alternativeText="Passo 4 de 4" style={styles.header} />

              <View style={styles.content}>
                <View style={styles.title}>
                  <H1 style={styles.h1}>Agora sua senha</H1>
                  <CustomText.Subtitle>
                    Por fim
                    <CustomText.SubtitleBold>
                      {route.params?.firstUserName == ""
                        ? null
                        : ` ${route.params?.firstUserName}`}
                      ,{" "}
                    </CustomText.SubtitleBold>
                    insira uma senha segura
                  </CustomText.Subtitle>
                </View>

                <OutlineInput
                  placeholder="Senha"
                  onChange={() => {}}
                  variant="password"
                  style={styles.input}
                />

                <LabelButton
                  onPress={() => navigate("Main")}
                  hasShadow
                  label="Finalizar"
                  style={styles.button}
                />
              </View>
            </View>

            <BottomAbstractArt style={styles.backgroundImage} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  avoidView: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 0,
    marginTop: 5,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    marginBottom: 25,
  },
  h1: {
    marginBottom: 5,
  },
  header: {
    marginTop: 40,
  },
  input: {
    marginTop: 5,
  },
  button: {
    marginTop: 40,
  },
});
