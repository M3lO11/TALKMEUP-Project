import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import PasswordResetSuccess from './PasswordResetSuccess';

const EmailVerification = ({ email = "********@gmail.com", onVerify = () => {}, onResend = () => {}, onBack = () => {} }) => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [verified, setVerified] = useState(false);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text) {
      // Auto-focus next input if a character is typed
      if (index < 4) {
        this[`input${index + 1}`]?.focus();
      }
    } else {
      // Auto-focus previous input if the character is deleted
      if (index > 0) {
        this[`input${index - 1}`]?.focus();
      }
    }
  };

  const handleVerify = () => {
    if (code.every(digit => digit !== '')) {
      setVerified(true);
    } else {
      onVerify();
    }
  };

  if (verified) {
    return <PasswordResetSuccess />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.backgroundShapes}>
        <View style={styles.ellipse1}></View>
        <View style={styles.ellipse2}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-XzyQggqYBhYcAj/group-5.png' }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Verifique seu e-mail</Text>
        <Text style={styles.subtitle}>
          Insira o código enviado para {email}
        </Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => this[`input${index}`] = ref}
              style={styles.codeInput}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.verifyButton}
          onPress={handleVerify}
        >
          <Text style={styles.verifyButtonText}>Verificar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.resendContainer}
          onPress={onResend}
        >
          <Text style={styles.resendText}>
            Ainda não recebeu o e-mail? 
            <Text style={styles.resendLink}> Reenviar e-mail</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
    borderRadius: 50,
    padding: 20,
    position: 'relative',
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
    marginTop: 33,
    marginLeft: 26,
    width: 40,
    height: 40,
  },
  backIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 35,
    zIndex: 1,
  },
  title: {
    marginTop: 50,
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#1E1E1E',
    lineHeight: 19,
    alignSelf: 'flex-start',
  },
  subtitle: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#989898',
    lineHeight: 24,
    alignSelf: 'flex-start',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    width: '100%',
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#1F427C',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#1F427C',
  },
  verifyButton: {
    marginTop: 40,
    backgroundColor: '#1F427C',
    borderRadius: 10,
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  resendContainer: {
    marginTop: 20,
  },
  resendText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#989898',
    textAlign: 'center',
  },
  resendLink: {
    color: '#1F427C',
    textDecorationLine: 'underline',
  }
});

export default EmailVerification;
