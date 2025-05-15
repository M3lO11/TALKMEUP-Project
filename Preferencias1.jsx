import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Lista de idiomas com nome e URL da bandeira
const languages = [
  { name: "Inglês(US)", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/fhuiruh7_expires_30_days.png" },
  { name: "Inglês(UK)", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/wf1gy195_expires_30_days.png" },
  { name: "Francês", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/y5bqm6yf_expires_30_days.png" },
  { name: "Alemão", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/c3mi8jmf_expires_30_days.png" },
  { name: "Italiano", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/3c7zad9j_expires_30_days.png" },
  { name: "Japonês", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/cmzxjp8e_expires_30_days.png" },
  { name: "Espanhol", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/fqwubuor_expires_30_days.png" },
  { name: "Português(Br)", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/j3zfmixs_expires_30_days.png" },
  { name: "Português(Pt)", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/nrohyelz_expires_30_days.png" },
  { name: "Árabe", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/711ehwdp_expires_30_days.png" },
  { name: "Russo", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/qlrc5526_expires_30_days.png" },
  { name: "Coreano", uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/ueef3orv_expires_30_days.png" },
  { name: "Tailandês", uri: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" },
  { name: "Turco", uri: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
  { name: "Mandarim", uri: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Circle_Flag_of_the_People%27s_Republic_of_China.svg" },
];

const LanguageSelection = ({ navigation }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const toggleLanguage = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((item) => item !== language)
        : [...prev, language]
    );
  };

  const handleContinue = () => {
    navigation.navigate("Preferencias2", { selectedLanguages });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Idioma Nativo</Text>
        <Text style={styles.subtitle}>
          Quais idiomas você possui proficiência para ensinar?
        </Text>

        <View style={styles.grid}>
          {languages.map((lang, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.languageCard,
                selectedLanguages.includes(lang.name) && styles.selectedCard,
              ]}
              onPress={() => toggleLanguage(lang.name)}
            >
              <Image source={{ uri: lang.uri }} style={styles.flag} />
              <Text style={styles.languageText}>{lang.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F427C",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#009BA9",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  languageCard: {
    backgroundColor: "#F3F4F5",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: "30%",
    alignItems: "center",
    marginBottom: 16,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#009BA9",
    backgroundColor: "#E0F7FA",
  },
  flag: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  languageText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1F427C",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: "center",
    shadowColor: "#CAD6FF",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#009BA9",
  },
});

export default LanguageSelection;
