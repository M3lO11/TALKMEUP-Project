import React, { useState } from "react";
import {
  SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const levels = [
  "Básico",
  "Intermediário",
  "Avançado",
  "Fluente",
  "Nativo",
  "Outro",
];

const LanguageProficiencySelector = ({ route }) => {
  const navigation = useNavigation();

  // Recupera os idiomas selecionados da tela anterior
  const selectedLanguages = route?.params?.selectedLanguages || [];
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleContinue = () => {
    if (selectedLevel) {
      if (selectedLanguages.length === 1) {
        navigation.navigate("Preferencias3");
      } else {
        navigation.navigate("Preferências 2", { selectedLanguages });
      }
    } else {
      alert("Por favor, selecione um nível.");
    }
  };

  const goToPreferencias3 = () => {
    navigation.navigate('Preferencias3');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header com a linha e marcador */}
        <View style={styles.header}>
          <View style={styles.headerLine} />
          <View style={styles.headerDot} />
        </View>

        {/* Título */}
        <Text style={styles.title}>
          Selecione o nível de proficiência no idioma em que você deseja
          ensinar:
        </Text>

        {/* Botões de seleção */}
        <View style={styles.levelsContainer}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.levelButton,
                selectedLevel === level && styles.levelButtonSelected,
              ]}
              onPress={() => handleSelect(level)}
            >
              <Text style={styles.levelText}>{level}</Text>
            </TouchableOpacity>
          ))}
        </View>


        {/* Example button to trigger navigation */}
        <TouchableOpacity style={styles.continueButton} onPress={goToPreferencias3}>
          <Text style={styles.continueText}>Continuar</Text>
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
  scrollView: {
    paddingTop: 100,
    paddingBottom: 40,
    paddingHorizontal: 28,
  },
  header: {
    marginBottom: 28,
  },
  headerLine: {
    height: 3,
    backgroundColor: "#1F427C",
  },
  headerDot: {
    width: 100,
    height: 5,
    backgroundColor: "#009BA9",
    marginTop: -3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F427C",
    marginBottom: 30,
  },
  levelsContainer: {
    gap: 16,
    marginBottom: 40,
  },
  levelButton: {
    backgroundColor: "#009BA9",
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
  },
  levelButtonSelected: {
    backgroundColor: "#007D8A",
  },
  levelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  continueButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#CAD6FF",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 5,
  },
  continueText: {
    color: "#009BA9",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LanguageProficiencySelector;
