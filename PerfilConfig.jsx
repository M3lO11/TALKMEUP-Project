import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerRow}>
          <TouchableOpacity>
            <Text style={styles.backArrow}>{"←"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Configurações de perfil</Text>
        </View>

        <View style={styles.avatarContainer}>
          <View style={styles.avatarBackground}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/1puhbmyn_expires_30_days.png" }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIconContainer}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/5dl41vvh_expires_30_days.png" }}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/02prjncc_expires_30_days.png" }}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Nome"
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/bvt3t65i_expires_30_days.png" }}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Sobrenome"
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/7rt7uslu_expires_30_days.png" }}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="E-mail"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
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
  scrollContainer: {
    padding: 20,
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 26,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  avatarContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  avatarBackground: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#EAE3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  editIconContainer: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#1F427C",
    borderRadius: 20,
    padding: 5,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 30,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D2D2D2",
    marginBottom: 25,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  saveButton: {
    backgroundColor: "#1F427C",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: "#CAD6FF",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
