import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

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
    navigation.navigate("Preferencias4", { selectedLanguages });
  };

  const languages = [
    { name: "Inglês(US)", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/8bl9nyvw_expires_30_days.png" },
    { name: "Inglês(UK)", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/mu0kd766_expires_30_days.png" },
    { name: "Francês", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/tdm6jjmg_expires_30_days.png" },
    { name: "Alemão", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/pnlv0yk8_expires_30_days.png" },
    { name: "Italiano", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/ev5l7ui5_expires_30_days.png" },
    { name: "Japonês", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/gxoia5f6_expires_30_days.png" },
    { name: "Espanhol", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/hr8y2wp5_expires_30_days.png" },
    { name: "Português(Br)", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/d2ek26q2_expires_30_days.png" },
    { name: "Português(Pt)", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/3wtpbinx_expires_30_days.png" },
    { name: "Árabe", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/8mxt0wkt_expires_30_days.png" },
    { name: "Russo", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/nzjmwjs9_expires_30_days.png" },
    { name: "Coreano", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/2oy1t5qf_expires_30_days.png" },
    { name: "Tailandês", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/dac0qzml_expires_30_days.png" },
    { name: "Turco", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/efcq6tuy_expires_30_days.png" },
    { name: "Mandarim", imageUrl: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/42lxfjv7_expires_30_days.png" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.divider} />
        <Text style={styles.titleText}>
          Selecione o(s) idioma(s) que você deseja aprender:
        </Text>

        <View style={styles.gridContainer}>
          {languages.map((lang, index) => {
            const selected = selectedLanguages.includes(lang.name);
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.languageButton,
                  selected && styles.selectedButton,
                ]}
                onPress={() => toggleLanguage(lang.name)}
              >
                <Image
                  source={{ uri: lang.imageUrl }}
                  resizeMode="contain"
                  style={styles.languageButtonImage}
                />
                <Text style={styles.languageButtonText}>{lang.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  divider: {
    height: 4,
    width: 120,
    backgroundColor: "#009BA9",
    marginBottom: 30,
    borderRadius: 2,
  },
  titleText: {
    color: "#1F427C",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  languageButton: {
    backgroundColor: "#F3F4F5",
    borderRadius: 16,
    width: 100,
    height: 100,
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: "#009BA9",
    backgroundColor: "#E0F7FA",
  },
  languageButtonImage: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  languageButtonText: {
    color: "#1F427C",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  continueButton: {
    marginTop: 30,
    backgroundColor: "#D2D2D20D",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    shadowColor: "#CAD6FF",
    shadowOpacity: 1.0,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 10,
  },
  continueButtonText: {
    color: "#009BA9",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LanguageSelection;
