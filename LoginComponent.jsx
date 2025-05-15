import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginComponent = ({ navigation, defaultEmail = '', defaultPassword = '' }) => {
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);

  const handleLogin = () => {
    console.log('Login with:', email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundShapes}>
        <View style={styles.ellipse1}></View>
        <View style={styles.ellipse2}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
      </View>
      <Text style={styles.title}>Bem-vindo(a) de volta</Text>
      <Text style={styles.subtitle}>Bom ver você novamente, sentimos sua falta</Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('Register')} // Navigate to RegisterComponent
      >
        <Text style={styles.createAccountButtonText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F8FAFF',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F427C',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#626262',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D0D8FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F1F4FF',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#1F427C',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#1F427C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D8FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#1F427C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginComponent;