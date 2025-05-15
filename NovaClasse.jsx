import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Adicione esta linha

const onlineTutors = [
  { name: "Jolie", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/jauswifj_expires_30_days.png" },
  { name: "Andy", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/6zfdjpak_expires_30_days.png" },
  { name: "Nancy", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/ou1yf0h6_expires_30_days.png" },
  { name: "Penguin", image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/63gj9wdg_expires_30_days.png" },
];

const tutors = [
  {
    name: "Andressa Lemoine",
    language: "Fluente em Francês",
    flag: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/51kyeoux_expires_30_days.png",
    photo: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/0b0ypcps_expires_30_days.png",
  },
  {
    name: "Alessandro Moretti",
    language: "Nativo da Itália",
    flag: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/gs7wl1cf_expires_30_days.png",
    photo: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/0lu0gj9j_expires_30_days.png",
  },
  {
    name: "Lívia Nakajima",
    language: "Nativa do Japão",
    flag: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/00o375gw_expires_30_days.png",
    photo: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/chu4n8m1_expires_30_days.png",
  },
  {
    name: "Estela Cabral",
    language: "Nativa do Brasil",
    flag: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/4rf605i6_expires_30_days.png",
    photo: "",
  },
  {
    name: "Sandiego Albanice",
    language: "Fluente em Russo",
    flag: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/2toy5oku_expires_30_days.png",
    photo: "",
  },
  {
    name: "Alexia Moraes",
    language: "Fluente em Italiano",
    flag: "",
    photo: "",
  },
];

export default function TutorScreen() {
  const navigation = useNavigation(); // Adicione esta linha

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.credits}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/jk9zflsa_expires_30_days.png" }}
              style={styles.profileIcon}
            />
            <View>
              <Text style={styles.creditsLabel}>Créditos Disponíveis</Text>
              <View style={styles.creditBox}>
                <Image
                  source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/9vo6a7j4_expires_30_days.png" }}
                  style={styles.coinIcon}
                />
                <Text style={styles.creditText}>100</Text>
              </View>
            </View>
          </View>

          <View style={styles.languageSelector}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/9s9k8wzt_expires_30_days.png" }}
              style={styles.flag}
            />
            <Text style={styles.languageText}>Brasil (BRA)</Text>
            <Text style={styles.arrow}>▼</Text>
          </View>
        </View>

        <View style={styles.onlineSection}>
          <Text style={styles.title}>Tutores Online</Text>
          <View style={styles.iconsRow}>
            {onlineTutors.map((tutor, index) => {
              if (tutor.name === "Nancy") {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.avatarContainer}
                    onPress={() => navigation.navigate("PerfilTutor")}
                  >
                    <Image source={{ uri: tutor.image }} style={styles.avatar} />
                    <View style={styles.onlineDot} />
                    <Text style={styles.avatarName}>{tutor.name}</Text>
                  </TouchableOpacity>
                );
              }
              return (
                <View key={index} style={styles.avatarContainer}>
                  <Image source={{ uri: tutor.image }} style={styles.avatar} />
                  <View style={styles.onlineDot} />
                  <Text style={styles.avatarName}>{tutor.name}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.tutorList}>
          {tutors.map((tutor, index) => (
            <View key={index} style={styles.tutorItem}>
              <View style={styles.tutorInfo}>
                <Image source={{ uri: tutor.flag }} style={styles.tutorFlag} />
                <View>
                  <Text style={styles.tutorName}>{tutor.name}</Text>
                  <Text style={styles.tutorLang}>{tutor.language}</Text>
                </View>
              </View>
              <Image source={{ uri: tutor.photo }} style={styles.tutorPhoto} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  credits: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  creditsLabel: {
    fontSize: 12,
    color: "#888",
  },
  creditBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginTop: 4,
  },
  coinIcon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
  creditText: {
    fontWeight: "bold",
    color: "#1F427C",
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  flag: {
    width: 20,
    height: 14,
    marginRight: 6,
  },
  languageText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  arrow: {
    fontSize: 10,
    marginLeft: 4,
  },
  onlineSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F427C",
    marginBottom: 10,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  onlineDot: {
    width: 10,
    height: 10,
    backgroundColor: "#00C851",
    borderRadius: 5,
    position: "absolute",
    top: 4,
    right: 4,
  },
  avatarName: {
    marginTop: 6,
    fontWeight: "bold",
  },
  tutorList: {
    padding: 20,
  },
  tutorItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  tutorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  tutorFlag: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 10,
  },
  tutorName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  tutorLang: {
    color: "#999",
    fontSize: 13,
  },
  tutorPhoto: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
});
