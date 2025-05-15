import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Adicione esta linha

const LearningPurposeScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation(); // Adicione esta linha

  const options = [
    "Interesse Pessoal",
    "Trabalho/Carreira",
    "Estudos",
    "Morar Fora",
    "Aprimorar Competências",
    "Outro",
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: 50 }}>
        <View style={{ alignItems: "flex-start", backgroundColor: "#FFFFFF75", paddingTop: 106 }}>
          {/* Barra de progresso */}
          <View style={{ marginBottom: 13, marginHorizontal: 14 }}>
            <View style={{ height: 3, backgroundColor: "#1F427C" }} />
            <View style={{ alignItems: "flex-end" }}>
              <View style={{ width: 100, height: 5, backgroundColor: "#009BA9" }} />
            </View>
          </View>

          {/* Título e subtítulo */}
          <Text style={{ color: "#1F427C", fontSize: 26, fontWeight: "bold", marginBottom: 10, marginLeft: 25 }}>
            Propósito de Aprendizado
          </Text>
          <Text style={{ color: "#009BA9", fontSize: 14, fontWeight: "bold", marginBottom: 35, marginLeft: 28, width: 283 }}>
            Os tutores serão introduzidos de acordo com as suas preferências!
          </Text>

          {/* Opções de seleção */}
          <View style={{ width: "100%", alignItems: "center", marginBottom: 31 }}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedOption(option)}
                style={{
                  width: "85%",
                  backgroundColor: selectedOption === option ? "#007C85" : "#009BA9",
                  borderRadius: 14,
                  paddingVertical: 14,
                  paddingHorizontal: 19,
                  marginBottom: 15,
                }}
              >
                <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Botão Continuar */}
          <View style={{ width: "100%", alignItems: "center", marginBottom: 50 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("MainTabs")}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                paddingVertical: 15,
                paddingHorizontal: 40,
                shadowColor: "#CAD6FF",
                shadowOpacity: 1,
                shadowOffset: { width: 0, height: 10 },
                shadowRadius: 20,
                elevation: 20,
              }}
            >
              <Text style={{ color: "#009BA9", fontSize: 20, fontWeight: "bold" }}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearningPurposeScreen;
