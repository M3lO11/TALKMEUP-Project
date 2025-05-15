import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuButton = ({ iconUri, label, onPress }) => (
  <TouchableOpacity style={styles.menuButton} onPress={onPress}>
    <Image source={{ uri: iconUri }} style={styles.icon} />
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Fundo Circular Azul */}
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/d6nlyot1_expires_30_days.png",
          }}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />

        {/* Botões de Menu */}
        <View style={styles.menuContainer}>
          <MenuButton
            iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/8v9xabo2_expires_30_days.png"
            label="Agenda"
          />
          <MenuButton
            iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/0igbx6ly_expires_30_days.png"
            label="Nova Classe"
            onPress={() => navigation.navigate("NovaClasse")}
          />
          <MenuButton
            iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/yclbu6g7_expires_30_days.png"
            label="Histórico de sessões"
            onPress={() => navigation.navigate("HistoricoSessao")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    paddingTop: 20,
    paddingBottom: 140,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginLeft: 22,
    marginBottom: 20,
    borderRadius: 50,
  },
  backgroundImage: {
    alignSelf: "center",
    width: 291,
    height: 635,
    borderRadius: 50,
  },
  menuContainer: {
    position: "absolute",
    top: 110,
    alignSelf: "center",
    gap: 20,
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F427C",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 360,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
    borderRadius: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 34,
    paddingTop: 30,
    paddingBottom: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderTopColor: "#F1F4FF",
    borderTopWidth: 2,
  },
  bottomIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  floatingButtonWrapper: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    zIndex: 10,
  },
  floatingButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  extraFloatingIcon: {
    position: "absolute",
    bottom: 29,
    right: -24,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
