import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.column}>
          <View style={styles.searchBar}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/oob28v4u_expires_30_days.png",
              }}
              resizeMode="contain"
              style={styles.iconLeft}
            />
            <TextInput
              placeholder="Buscar"
              placeholderTextColor="#49454F"
              style={styles.input}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/7rr53068_expires_30_days.png",
              }}
              resizeMode="contain"
              style={styles.iconRight}
            />
          </View>

          {/* Outros componentes abaixo */}
          <View style={styles.box} />
          <View style={styles.view}>
            <View style={styles.box2} />
          </View>
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
    flex: 1,
    borderRadius: 50,
  },
  content: {
    paddingBottom: 50,
  },
  column: {
    paddingTop: 64,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECE6F0",
    borderRadius: 28,
    paddingHorizontal: 16,
    width: width * 0.9,
    height: 56,
    alignSelf: "center",
    marginBottom: 40,
  },
  input: {
    flex: 1,
    color: "#49454F",
    fontSize: 16,
    marginHorizontal: 8,
  },
  iconLeft: {
    width: 24,
    height: 24,
  },
  iconRight: {
    width: 24,
    height: 24,
  },
  box: {
    width: width * 0.25,
    height: 60,
    borderRadius: 14,
    marginBottom: 40,
    marginLeft: 20,
    backgroundColor: "#EEE",
  },
  view: {
    borderColor: "#F1F4FF",
    borderWidth: 2,
    width: width * 0.9,
    alignSelf: "center",
    paddingVertical: 20,
    alignItems: "center",
  },
  box2: {
    width: "100%",
    height: 200,
    borderColor: "#F1F4FF",
    borderWidth: 2,
  },
});
