import React from "react";
import { Platform } from "react-native";
import {SafeAreaView,View,ScrollView,Text,TouchableOpacity,Image,StyleSheet,Dimensions,} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function Perfil() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.headerSynthe}>      
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/552/552721.png" }}
            style={styles.avatar}
            resizeMode="cover"
          />
          <View style={styles.textBlock}>
            <Text style={styles.name}>Maria Silva</Text>
            <Text style={styles.description}>
              Tutor/Estudante{"\n"}Nativa do Brasil{"\n"}Fluente em Inglês
            </Text>
          </View>
        </View>
        <View style={styles.starsBox}>
          <View style={styles.starsContainer}>
              {[...Array(4)].map((_, index) => (
                <Image
                  key={index}
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }}
                  style={styles.star}
                  resizeMode="contain"
                />
              ))}
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png" }}
                style={styles.star}
                resizeMode="contain"
              />
          </View>
        </View>
        <View style={styles.editRow}>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => navigation.navigate("PerfilConfig")}
          >
            <Text style={styles.editText}>Editar perfil</Text>
          </TouchableOpacity>
          <View style={styles.editIconBG}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
              }}
              style={styles.editIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const PERCENT = (val) => width * val;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },
  scrollView: {
    minHeight: "100%",
    alignItems: "center",
    paddingVertical: height * 0.04,
  },
  headerSynthe: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: PERCENT(0.04),
    marginBottom: height * 0.014,
    paddingHorizontal: PERCENT(0.06),
  },
  avatar: {
    width: PERCENT(0.26),
    aspectRatio: 1,
    borderRadius: 150, // Real circular
    backgroundColor: "#ece6f8",
    borderWidth: 0,
    marginRight: PERCENT(0.06),
  },
  textBlock: {
    flex: 1,
  },
  name: {
    fontSize: PERCENT(0.090),
    fontWeight: "700",
    color: "#1F427C",
    marginBottom: 2,
    textAlign: "left",
  },
  description: {
    color: "#A0A2A5",
    fontSize: PERCENT(0.047),
    lineHeight: PERCENT(0.062),
    letterSpacing: 0.3,
    textAlign: "left",
    fontWeight: "400",
    marginTop: 2,
  },
  starsBox: {
    alignSelf: "stretch",
    marginHorizontal: PERCENT(0.06),
    marginTop: 24,
    backgroundColor: "#fff",
    minHeight: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#656388",
        shadowOffset: { width: 0, height: 3.5 },
        shadowOpacity: 0.11,
        shadowRadius: 22,
      },
      android: { elevation: 5 },
    }),
  },
  starsContainer: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    width: PERCENT(0.054),
    height: PERCENT(0.054),
    marginHorizontal: 2.5,
    tintColor: "#02abbd",
  },
  editRow: {
    flexDirection: "row",
    paddingHorizontal: PERCENT(0.02),
    alignItems: "center",
    width: "91%",
    marginTop: 27,
  },
  editBtn: {
    flex: 1,
    height: 52,
    backgroundColor: "#19376b",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    shadowColor: "#0b213c",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.09,
    shadowRadius: 9,
    elevation: 1.5,
  },
  editText: {
    fontWeight: "700",
    color: "#FFF",
    fontSize: PERCENT(0.049),
    letterSpacing: 0.15,
  },
  editIconBG: {
    width: 48, height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19376b",
    borderRadius: 10,
    marginLeft: 2,
    ...Platform.select({
      ios: {
        shadowColor: "#658abe",
        shadowOffset: { width: 1, height: 2.5 },
        shadowOpacity: 0.18,
        shadowRadius: 10,
      },
      android: { elevation: 1.5 },
    }),
  },
  editIcon: {
    width: 27,
    height: 27,
    tintColor: "#fff",
  },  
});
