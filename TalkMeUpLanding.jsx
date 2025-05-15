import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TalkMeUpLanding = ({ navigation, logoSrc = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/43c1o9ERVh/1chhdb1h_expires_30_days.png" }) => {
  return (
    <View style={styles.landingContainer}>
      <View style={styles.backgroundShapes}>
        <View style={styles.ellipse1}></View>
        <View style={styles.ellipse2}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.logo}>
          <Image source={{ uri: logoSrc }} style={styles.logoImage} />
        </View>

        <View style={styles.textContent}>
          <Text style={styles.title}>Aprenda e ensine com Talk Me Up</Text>
          <Text style={styles.subtitle}>Explore o mundo das línguas através da aprendizagem bilateral.</Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.btnPrimary} 
            onPress={() => navigation.navigate('Login')} // Navigate to Login screen
          >
            <Text style={styles.btnTextPrimary}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnSecondary} 
            onPress={() => navigation.navigate('Register')} // Navigate to Register screen
          >
            <Text style={styles.btnTextSecondary}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    backgroundColor: '#F8FAFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  backgroundShapes: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  ellipse1: {
    position: 'absolute',
    width: 650,
    height: 650,
    top: -250,
    right: -120,
    backgroundColor: '#E3E8FF',
    borderRadius: 325,
  },
  ellipse2: {
    position: 'absolute',
    width: 520,
    height: 520,
    top: -120,
    left: -120,
    borderWidth: 3,
    borderColor: '#D0D8FF',
    borderRadius: 260,
  },
  rectangle3: {
    position: 'absolute',
    width: 480,
    height: 480,
    bottom: -180,
    left: -260,
    borderWidth: 2,
    borderColor: '#CAD3FF',
  },
  rectangle4: {
    position: 'absolute',
    width: 380,
    height: 380,
    bottom: -230,
    right: -220,
    borderWidth: 2,
    borderColor: '#CAD3FF',
  },
  content: {
    zIndex: 1,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    marginBottom: 40,
  },
  logoImage: {
    width: 190,
    height: 200,
    resizeMode: 'contain',
  },
  textContent: {
    textAlign: 'center',
    paddingHorizontal: 45,
    marginBottom: 90,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 32,
    color: '#1F3D7A',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    color: '#333',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
  },
  btnPrimary: {
    width: 140,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#1F3D7A',
    alignItems: 'center',
  },
  btnSecondary: {
    width: 140,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D8FF',
    alignItems: 'center',
  },
  btnTextPrimary: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    color: '#FFFFFF',
  },
  btnTextSecondary: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    color: '#1F3D7A',
  },
});

export default TalkMeUpLanding;