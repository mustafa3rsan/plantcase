import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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
      </View>
      
      <View style={styles.bottomContainer}>
        <Button
          title="Devam Et"
          onPress={handleNext}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
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
  bottomContainer: {
    marginBottom: 40,
    width: '100%',
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: '#28AF6E',
    borderRadius: 12,
    height: 56,
  }
});

export default StepsScreen; 