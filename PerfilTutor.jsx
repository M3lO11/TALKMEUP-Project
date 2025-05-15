import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileContent}>
          {/* Foto e nome */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/4xbmhdpj_expires_30_days.png",
                }}
                style={styles.avatar}
              />
              <View style={styles.statusDot} />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.name}>Maria da Silva</Text>
              <Text style={styles.languages}>
                Inglês - 100% de fluência{"\n"}
                Francês - 80% de fluência
              </Text>
            </View>
          </View>

          {/* Botões */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.negotiationButton}>
              <Text style={styles.buttonText}>Negociar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.emailButton}>
              <Text style={styles.buttonText}>Email</Text>
            </TouchableOpacity>
          </View>

          {/* Estrelas */}
          <View style={styles.ratingBox}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/2t0tbeev_expires_30_days.png",
              }}
              resizeMode="contain"
              style={styles.ratingImage}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFF",
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: height * 0.08,
    paddingBottom: height * 0.1,
  },
  profileContent: {
    width: "90%",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    position: "relative",
    marginRight: 16,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00C566",
    position: "absolute",
    right: 2,
    bottom: 2,
    borderWidth: 2,
    borderColor: "#fff",
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F427C",
  },
  languages: {
    fontSize: 15,
    color: "#888",
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  negotiationButton: {
    flex: 1,
    backgroundColor: "#009BA9",
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 10,
    elevation: 5,
  },
  emailButton: {
    flex: 1,
    backgroundColor: "#1F427C",
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  ratingBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
    elevation: 5,
  },
  ratingImage: {
    width: "40%",
    height: 24,
  },
});

export default UserProfile;
