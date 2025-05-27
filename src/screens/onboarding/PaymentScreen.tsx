import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ViewStyle, TextStyle, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOnboardingCompleted } from '../../store/slices/onboardingSlice';
import { Button } from '../../components/Button';

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

  const getButtonStyle = (plan: typeof plans[0]): ViewStyle => {
    const styles: ViewStyle[] = [baseStyles.selectButton];
    if (plan.recommended) {
      styles.push(baseStyles.recommendedButton);
    }
    return Object.assign({}, ...styles);
  };

  const getTextStyle = (plan: typeof plans[0]): TextStyle => {
    const styles: TextStyle[] = [baseStyles.selectButtonText];
    if (plan.recommended) {
      styles.push(baseStyles.recommendedButtonText);
    }
    return Object.assign({}, ...styles);
  };

  return (
    <SafeAreaView style={baseStyles.container}>
      <View style={baseStyles.content}>
        <View style={baseStyles.header}>
          <TouchableOpacity style={baseStyles.closeButton} onPress={handleClose}>
            <Text style={baseStyles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <Text style={baseStyles.title}>Premium Özellikler</Text>
          <Text style={baseStyles.subtitle}>Size en uygun planı seçin</Text>
        </View>
        
        <ScrollView style={baseStyles.plansContainer} showsVerticalScrollIndicator={false}>
          {plans.map((plan, index) => (
            <View key={index} style={[
              baseStyles.planCard,
              plan.recommended && baseStyles.recommendedCard
            ]}>
              {plan.recommended && (
                <View style={baseStyles.recommendedBadge}>
                  <Text style={baseStyles.recommendedText}>ÖNERİLEN</Text>
                </View>
              )}
              
              <View style={baseStyles.planHeader}>
                <Text style={baseStyles.planName}>{plan.name}</Text>
                <View style={baseStyles.priceContainer}>
                  <Text style={baseStyles.price}>{plan.price}</Text>
                  <Text style={baseStyles.period}>{plan.period}</Text>
                </View>
              </View>
              
              <View style={baseStyles.featuresContainer}>
                {plan.features.map((feature, featureIndex) => (
                  <View key={featureIndex} style={baseStyles.featureRow}>
                    <Text style={baseStyles.checkmark}>✓</Text>
                    <Text style={baseStyles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
              
              <Button
                title={plan.recommended ? 'Başlat' : 'Seç'}
                onPress={handleClose}
                style={getButtonStyle(plan)}
                textStyle={getTextStyle(plan)}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      
      <View style={baseStyles.bottomContainer}>
        <View style={baseStyles.legal}>
          <Text style={baseStyles.legalText}>
            By tapping next, you are agreeing to PlantID{'\n'}
            Terms of Use & Privacy Policy.
          </Text>
        </View>
        <TouchableOpacity style={baseStyles.skipButton} onPress={handleClose}>
          <Text style={baseStyles.skipButtonText}>Şimdilik Geç</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 30,
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
  },
  recommendedButton: {
    backgroundColor: '#007AFF',
  },
  selectButtonText: {
    color: '#666666',
  },
  recommendedButtonText: {
    color: '#FFFFFF',
  },
  bottomContainer: {
    marginBottom: 40,
    width: '100%',
    paddingHorizontal: 24,
  },
  legal: {
    alignItems: 'center',
    marginBottom: 20,
  },
  legalText: {
    fontFamily: 'Rubik',
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.07,
    textAlign: 'center',
    color: 'rgba(89, 113, 101, 0.7)',
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