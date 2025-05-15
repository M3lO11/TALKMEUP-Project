import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const offers = [
  {
    name: 'Lívia Nakajima',
    flag: 'https://flagcdn.com/w80/jp.png',
    credits: 39,
    status: null,
    actions: true,
  },
  {
    name: 'Julia Macedo',
    flag: 'https://flagcdn.com/w80/br.png',
    credits: 39,
    status: null,
    actions: true,
  },
  {
    name: 'Andressa Lemoine',
    flag: 'https://flagcdn.com/w80/fr.png',
    credits: 39,
    status: null,
    actions: true,
  },
  {
    name: 'Sophia Allans',
    flag: 'https://flagcdn.com/w80/es.png',
    status: 'Aceita',
    statusColor: '#A7F3D0',
    statusTextColor: '#166534',
  },
  {
    name: 'Estevão Guedes',
    flag: 'https://flagcdn.com/w80/cn.png',
    status: 'Recusada',
    statusColor: '#FCA5A5',
    statusTextColor: '#991B1B',
  },
  {
    name: 'Heloísa Monteiro',
    flag: 'https://flagcdn.com/w80/pt.png',
    status: 'Pendente',
    statusColor: '#C7D2FE',
    statusTextColor: '#3730A3',
  },
];

const Creditos = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.title}>Ofertas</Text>
      <Text style={styles.subtitle}>Visualize suas ofertas de crédito disponíveis!</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {offers.map((offer, idx) => (
          <View key={idx} style={styles.offerRow}>
            <Image source={{ uri: offer.flag }} style={styles.flag} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{offer.name}</Text>
              {offer.credits && (
                <View style={styles.creditsBadge}>
                  <Text style={styles.creditsText}>{offer.credits} créditos</Text>
                </View>
              )}
              {offer.status && (
                <View style={[styles.statusBadge, { backgroundColor: offer.statusColor }]}>
                  <Text style={[styles.statusText, { color: offer.statusTextColor }]}>{offer.status}</Text>
                </View>
              )}
            </View>
            {offer.actions && (
              <View style={styles.actions}>
                <View style={[styles.circle, { backgroundColor: '#A7F3D0' }]}>
                  <FontAwesome name="check" size={20} color="#166534" />
                </View>
                <View style={[styles.circle, { backgroundColor: '#FCA5A5' }]}>
                  <FontAwesome name="close" size={20} color="#991B1B" />
                </View>
                <View style={[styles.circle, { backgroundColor: '#C7D2FE' }]}>
                  <MaterialIcons name="pan-tool-alt" size={20} color="#3730A3" />
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 16,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 24,
  },
  offerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  flag: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 14,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  creditsBadge: {
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 2,
    marginBottom: 2,
  },
  creditsText: {
    color: '#166534',
    fontWeight: '600',
    fontSize: 14,
  },
  statusBadge: {
    borderRadius: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginTop: 2,
  },
  statusText: {
    fontWeight: '600',
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 10,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
});

export default Creditos;
