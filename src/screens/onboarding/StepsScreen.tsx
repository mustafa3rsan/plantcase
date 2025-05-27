import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StepsScreen: React.FC = () => {
  const navigation = useNavigation();

  const steps = [
    {
      title: '🌱 Bitkilerinizi Keşfedin',
      description: 'Geniş bitki koleksiyonumuzdan size uygun olanları bulun'
    },
    {
      title: '📱 Kolay Takip',
      description: 'Bitkilerinizin bakım zamanlarını takip edin'
    },
    {
      title: '💡 Uzman Tavsiyeleri',
      description: 'Bitkileriniz için özel bakım tavsiyeleri alın'
    },
    {
      title: '📈 İlerleme Takibi',
      description: 'Bitkilerinizin büyüme sürecini kaydedin'
    }
  ];

  const handleNext = () => {
    navigation.navigate('Payment' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Plant Case ile Neler Yapabilirsiniz?</Text>
      </View>
      
      <ScrollView style={styles.stepsContainer} showsVerticalScrollIndicator={false}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepItem}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
          </View>
        ))}
      </ScrollView>
      
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 30,
  },
  stepsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  stepItem: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    marginBottom: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default StepsScreen; 