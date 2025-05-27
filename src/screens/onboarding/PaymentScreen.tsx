import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOnboardingCompleted } from '../../store/slices/onboardingSlice';

const PaymentScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    // Onboarding'i tamamlandı olarak işaretle
    dispatch(setOnboardingCompleted());
  };

  const plans = [
    {
      name: 'Temel Plan',
      price: '₺29',
      period: '/ay',
      features: [
        'Bitki bakım takvimiş',
        'Temel bakım tavsiyeleri',
        'Fotoğraf galerisi',
        'Email desteği'
      ]
    },
    {
      name: 'Premium Plan',
      price: '₺49',
      period: '/ay',
      features: [
        'Tüm Temel Plan özellikleri',
        'Uzman danışmanlık',
        'Hastalık teşhisi',
        'Özel bakım programı',
        '7/24 destek'
      ],
      recommended: true
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Premium Özellikler</Text>
        <Text style={styles.subtitle}>Size en uygun planı seçin</Text>
      </View>
      
      <ScrollView style={styles.plansContainer} showsVerticalScrollIndicator={false}>
        {plans.map((plan, index) => (
          <View key={index} style={[
            styles.planCard,
            plan.recommended && styles.recommendedCard
          ]}>
            {plan.recommended && (
              <View style={styles.recommendedBadge}>
                <Text style={styles.recommendedText}>ÖNERİLEN</Text>
              </View>
            )}
            
            <View style={styles.planHeader}>
              <Text style={styles.planName}>{plan.name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{plan.price}</Text>
                <Text style={styles.period}>{plan.period}</Text>
              </View>
            </View>
            
            <View style={styles.featuresContainer}>
              {plan.features.map((feature, featureIndex) => (
                <View key={featureIndex} style={styles.featureRow}>
                  <Text style={styles.checkmark}>✓</Text>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
            
            <TouchableOpacity style={[
              styles.selectButton,
              plan.recommended && styles.recommendedButton
            ]}>
              <Text style={[
                styles.selectButtonText,
                plan.recommended && styles.recommendedButtonText
              ]}>
                {plan.recommended ? 'Başlat' : 'Seç'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleClose}>
          <Text style={styles.skipButtonText}>Şimdilik Geç</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#666666',
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  plansContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  planCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    position: 'relative',
  },
  recommendedCard: {
    borderColor: '#007AFF',
    backgroundColor: '#F0F8FF',
  },
  recommendedBadge: {
    position: 'absolute',
    top: -8,
    left: 20,
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  recommendedText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  planHeader: {
    marginBottom: 20,
  },
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  period: {
    fontSize: 16,
    color: '#666666',
    marginLeft: 4,
  },
  featuresContainer: {
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkmark: {
    fontSize: 16,
    color: '#28A745',
    marginRight: 12,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },
  selectButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  recommendedButton: {
    backgroundColor: '#007AFF',
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
  },
  recommendedButtonText: {
    color: '#FFFFFF',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  skipButton: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  skipButtonText: {
    fontSize: 16,
    color: '#666666',
    textDecorationLine: 'underline',
  },
});

export default PaymentScreen; 