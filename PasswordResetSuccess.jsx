import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const PasswordResetSuccess = ({ onConfirm = () => {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundShapes}>
        <View style={styles.ellipse1}></View>
        <View style={styles.ellipse2}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
      </View>

      <View style={styles.contentFrame}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-X_UAggqYBhYcAv/group-5.png' }}
          style={styles.backIcon}
        />
        <Text style={styles.title}>Senha redefinida</Text>
        <Text style={styles.description}>
          Sua senha foi redefinida com sucesso. Clique em "Confirmar senha" para concluir
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={onConfirm}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Confirmar senha</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-X_UAggqYBhYcAv/objects.png' }}
        style={styles.backgroundObjects}
      />
      <Image 
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-X_UAggqYBhYcAv/backgrou.png' }}
        style={styles.background}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8FAFF',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
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
  contentFrame: {
    width: 340,
    marginTop: 61,
    alignItems: 'flex-start',
    zIndex: 1,
  },
  backIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 65,
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 19,
    color: '#1E1E1E',
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 24,
    color: '#989898',
    textAlign: 'center',
    width: '100%',
  },
  confirmButton: {
    width: 317,
    backgroundColor: '#1F427C',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
    zIndex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
    textAlign: 'center',
  },
  backgroundObjects: {
    width: 1069,
    height: 1417,
    position: 'absolute',
    top: -356,
    left: -320,
    resizeMode: 'contain',
    zIndex: -1,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -2,
  },
});

export default PasswordResetSuccess;
