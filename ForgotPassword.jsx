import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email === 'teste123@gmail.com') {
      navigation.navigate('EmailVerification', { email }); // Pass the email as a parameter
    } else {
      alert('E-mail inválido ou não encontrado.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundShapes}>
        <View style={styles.ellipse1}></View>
        <View style={styles.ellipse2}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
      </View>

      <View style={styles.contentWrapper}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-XgSh_Ow-G566w0/group-5.png' }} style={styles.backImage} />
        </TouchableOpacity>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Esqueceu sua senha</Text>
          <Text style={styles.subtitle}>
            Por favor insira seu e-mail para redefinir a senha
          </Text>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Enviar e-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
    alignItems: 'center',
    justifyContent: 'center',
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
  contentWrapper: {
    zIndex: 1,
    paddingHorizontal: 30,
    width: '100%',
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
    width: 40,
    height: 40,
  },
  backImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  formContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    color: '#1e1e1e',
    marginBottom: 21,
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    color: '#989898',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputWrapper: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f1f4ff',
    borderColor: '#1f427c',
    borderWidth: 2,
    borderRadius: 10,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#626262',
  },
  submitButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#1f427c',
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    color: '#fff',
  },
});

export default ForgotPassword;
