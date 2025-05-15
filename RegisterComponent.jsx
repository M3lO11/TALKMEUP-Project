import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const RegisterComponent = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    try {
      // Exemplo para integração com Firebase
      // await auth().createUserWithEmailAndPassword(email, password);

      // Ou envie via API (fetch/axios)
      // const response = await fetch('https://sua-api.com/register', { ... });

      navigation.navigate('Preferencias1');
    } catch (error) {
      Alert.alert('Erro ao cadastrar', error.message || 'Tente novamente');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.backgroundShapes}>
          <View style={styles.ellipse1}></View>
          <View style={styles.ellipse2}></View>
          <View style={styles.rectangle3}></View>
          <View style={styles.rectangle4}></View>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastre-se para começar</Text>
          <Text style={styles.subtitle}>Crie uma conta para mergulhar no mundo das línguas!</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#626262"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#626262"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#626262"
          />
          <TouchableOpacity style={styles.btnPrimary} onPress={handleSignup}>
            <Text style={styles.btnTextPrimary}>Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginPrompt}>Já tem uma conta?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialMedia}>
          <Text style={styles.socialTitle}>Ou continue com</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-XmpAggqYBhYcAh/ph-googl.png' }} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-XmpAggqYBhYcAh/ic-sharp.png' }} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-XmpAggqYBhYcAh/ic-basel.png' }} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: '#ffffff',
  },
  backgroundShapes: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  ellipse1: {
    position: 'absolute',
    width: 500,
    height: 500,
    top: -200,
    right: -120,
    backgroundColor: '#E3E8FF',
    borderRadius: 250,
  },
  ellipse2: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: -100,
    left: -100,
    borderWidth: 3,
    borderColor: '#D0D8FF',
    borderRadius: 200,
  },
  rectangle3: {
    position: 'absolute',
    width: 300,
    height: 300,
    bottom: -160,
    left: -180,
    borderWidth: 2,
    borderColor: '#CAD3FF',
  },
  rectangle4: {
    position: 'absolute',
    width: 280,
    height: 280,
    bottom: -200,
    right: -150,
    borderWidth: 2,
    borderColor: '#CAD3FF',
  },
  header: {
    marginTop: 80,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1F427C',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    width: '85%',
    height: 56,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 15,
  },
  btnPrimary: {
    width: 160,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#1F3D7A',
    alignItems: 'center',
    marginTop: 10,
  },
  btnTextPrimary: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
  },
  loginPrompt: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F427C',
    marginTop: 10,
  },
  socialMedia: {
    marginTop: 30,
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F427C',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 44,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default RegisterComponent;
