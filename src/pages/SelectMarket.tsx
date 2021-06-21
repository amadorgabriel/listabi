import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";

import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { theme } from "../styles/colors";
import db from "../../server.json";

import { Card } from "../components/Card/Index";
import { H1, H2, Text } from "../components/Typografy/Index";
import { LabelButton } from "../components/Button/Index";

const mapStyle = [
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

interface Market {
  id: number;
  title: string;
  isCertified: boolean;
  latitude: number;
  longitude: number;
  adress: string;
  isOpened: boolean;
  isRecomended: boolean;
  stars: string;
  avaliationsQuantity: number;
}

export const SelectMarket: React.FC = () => {
  const [markets, setMarkets] = useState([{} as Market]);
  const [currentMarket, setCurrentMarket] = useState({} as Market);

  const { navigate } = useNavigation()

  useEffect(() => {
    setMarkets(db.markets);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%", paddingBottom: 20 }}
      >
        <View style={styles.titleView}>
          <H1>Selecione seu mercado</H1>
          <Text.Subtitle>
            Selecione o mercado que deseja fazer compras.
          </Text.Subtitle>
        </View>

        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: -23.5364375,
            longitude: -46.6483923,
            latitudeDelta: 0.01,
            longitudeDelta: 0.001,
          }}
        >
          {markets?.map((marker: Market, index: number) => (
            <Marker
              key={index}
              title={marker.title + " " + marker.stars}
              onPress={() => {
                setCurrentMarket(marker);
              }}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              description={
                marker.isOpened
                  ? `Aberto agora - ${marker.avaliationsQuantity} avaliações`
                  : "Fechado agora"
              }
              image={
                marker.isCertified === true
                  ? require("../assets/icon-map-green.png")
                  : require("../assets/icon-map.png")
              }
            />
          ))}
        </MapView>

        <View style={styles.moreInfo}>
          {Object.keys(currentMarket).length === 0 ? (
            <Card message="As arvorezinhas representam os muito produtos sustentáveis perto da sua casa" />
          ) : (
            <View style={styles.actionInfo}>
              <H2>Infos</H2>
              <Text.Subtitle>{currentMarket.title}</Text.Subtitle>
              <Text.Medium>{currentMarket.adress}</Text.Medium>

              <View style={styles.tags}>
                <View
                  style={{
                    ...styles.infoTag,
                    backgroundColor: currentMarket.isOpened
                      ? "#AEEAD9"
                      : "#e6a39e",
                  }}
                >
                  <Text.Small
                    style={{
                      color: currentMarket.isOpened ? "#30837F" : "#fff",
                    }}
                  >
                    {currentMarket.isOpened ? "Aberto agora" : "Fechado"}
                  </Text.Small>
                </View>
                {currentMarket.isRecomended && (
                  <View style={styles.infoTag}>
                    <Text.Small style={{ color: "#30837F" }}>
                      Recomendado
                    </Text.Small>
                  </View>
                )}
              </View>

              <LabelButton
                style={styles.button}
                label="Próximo"
                onPress={() => {
                  navigate("PurcasheMode");
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  map: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  titleView: {
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 30,
  },
  moreInfo: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  actionInfo: {
    width: "100%",
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  infoTag: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#AEEAD9",
    borderRadius: 10,
    marginRight: 10,
  },
  button: {
    marginTop: 25,
    alignSelf: "flex-end",
    width: "58%",
  },
});
