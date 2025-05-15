import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const sessions = [
  {
    name: "Alessandro Moretti",
    languages: "Francês ↔ Italiano",
    credits: "20 Créditos",
    flag: "https://flagcdn.com/w320/it.png",
  },
  {
    name: "Alessandro Moretti",
    languages: "Português (BRA) ↔ Português (PT)",
    credits: "45 Créditos",
    flag: "https://flagcdn.com/w320/pt.png",
  },
  {
    name: "Alessandro Moretti",
    languages: "Francês ↔ Mandarim",
    credits: "25 Créditos",
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    name: "Alessandro Moretti",
    languages: "Francês ↔ Alemão",
    credits: "38 Créditos",
    flag: "https://flagcdn.com/w320/de.png",
  },
  {
    name: "Alessandro Moretti",
    languages: "Francês ↔ Japonês",
    credits: "32 Créditos",
    flag: "https://flagcdn.com/w320/jp.png",
  },
  {
    name: "Alessandro Moretti",
    languages: "Português (BRA) ↔ Espanhol",
    credits: "20 Créditos",
    flag: "https://flagcdn.com/w320/es.png",
  },
];

export default function SessionHistory() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Histórico de sessões</Text>
        </View>

        {/* Lista de sessões */}
        {sessions.map((session, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardLeft}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/h6i3o70y_expires_30_days.png",
                }}
                style={styles.clockIcon}
              />
              <View style={styles.cardText}>
                <Text style={styles.name}>{session.name}</Text>
                <Text style={styles.languages}>
                  {session.languages} • {session.credits}
                </Text>
              </View>
            </View>
            <Image source={{ uri: session.flag }} style={styles.flag} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    gap: 10,
  },
  backArrow: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#D2D2D2",
    borderRadius: 14,
    padding: 12,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  clockIcon: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  cardText: {
    flexShrink: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
  languages: {
    fontSize: 12,
    color: "#000",
    marginTop: 2,
  },
  flag: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginLeft: 10,
  },
});
