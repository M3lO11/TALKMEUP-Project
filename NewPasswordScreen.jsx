import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const NewPasswordScreen = ({ onBack = () => {}, onConfirm = () => {} }) => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Background Shapes */}
      <View style={styles.backgroundShapes}>
        <View style={styles.ellipse1}></View>
        <View style={styles.ellipse2}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
      </View>

      {/* Back Button */}
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-YEEx_Ow-G566xc/group-5.png' }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Insira a nova senha</Text>
        
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira a senha"
            placeholderTextColor="#626262"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={onConfirm}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
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
  backButton: {
    marginTop: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  contentContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E1E',
    marginBottom: 30,
    textAlign: 'left',
  },
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 10,
    letterSpacing: -0.48,
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1F427C',
    padding: 20,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#626262',
  },
  confirmButton: {
    backgroundColor: '#1F427C',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default NewPasswordScreen;

