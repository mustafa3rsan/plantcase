import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOnboardingCompleted } from '../../store/slices/onboardingSlice';

const { height: screenHeight } = Dimensions.get('window');

const PaymentScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  const handlePlanSelect = (plan: 'yearly' | 'monthly') => {
    setSelectedPlan(plan);
  };

  const handleContinue = () => {
    dispatch(setOnboardingCompleted());
  };

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground 
        source={require('../../../assets/figma/cicekler.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.bottomSection}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>PlantApp Premium</Text>
              <Text style={styles.subtitle}>Access All Features</Text>
            </View>
            
            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuresContainer}
              style={styles.featuresScrollView}
            >
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>
                  <View style={styles.iconBackground}>
                    <Image 
                      source={require('../../../assets/figma/scanner.png')}
                      style={styles.iconImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureTitle}>Unlimited</Text>
                  <Text style={styles.featureSubtitle}>Plant Identify</Text>
                </View>
              </View>
              
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>
                  <View style={styles.iconBackground}>
                    <Image 
                      source={require('../../../assets/figma/faster.png')}
                      style={styles.iconImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureTitle}>Faster</Text>
                  <Text style={styles.featureSubtitle}>Process</Text>
                </View>
              </View>
              
              <View style={styles.featureCard}>
                <View style={styles.featureIcon}>
                  <View style={styles.iconBackground}>
                    <Text style={styles.iconText}>🌿</Text>
                  </View>
                </View>
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureTitle}>Detailed</Text>
                  <Text style={styles.featureSubtitle}>Plant care</Text>
                </View>
              </View>
            </ScrollView>
            
            <View style={styles.plansContainer}>
              {/* Yearly Plan */}
              <TouchableOpacity 
                style={[
                  styles.planCard, 
                  selectedPlan === 'yearly' && styles.selectedCard
                ]}
                onPress={() => handlePlanSelect('yearly')}
              >
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Save 50%</Text>
                </View>
                
                <View style={styles.planContent}>
                  <View style={styles.checkBox}>
                    <View style={[
                      styles.checkCircle,
                      selectedPlan === 'yearly' && styles.checkedCircle
                    ]} />
                  </View>
                  
                  <View style={styles.planInfo}>
                    <Text style={styles.planTitle}>1 Year</Text>
                    <Text style={styles.planDescription}>First 3 days free, then $529,99/year</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {/* Monthly Plan */}
              <TouchableOpacity 
                style={[
                  styles.planCard, 
                  selectedPlan === 'monthly' && styles.selectedCard
                ]}
                onPress={() => handlePlanSelect('monthly')}
              >
                <View style={styles.planContent}>
                  <View style={styles.checkBox}>
                    <View style={[
                      styles.checkCircle,
                      selectedPlan === 'monthly' && styles.checkedCircle
                    ]} />
                  </View>
                  
                  <View style={styles.planInfo}>
                    <Text style={styles.planTitle}>1 Month</Text>
                    <Text style={styles.planDescription}>$2.99/month, auto renewable</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
            
            <View style={styles.legalContainer}>
              <Text style={styles.legalText}>
                After the 3-day free trial period you'll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
              </Text>
              
              <Text style={styles.legalLinksText}>
                Terms  •  Privacy  •  Restore
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: screenHeight * 0.5,
    zIndex: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
  },
  bottomSection: {
    marginBottom: 20,
    marginTop: 40,
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'left',
    marginTop: 4,
    letterSpacing: 0.38,
  },
  featuresScrollView: {
    marginBottom: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 24,
  },
  featureCard: {
    width: 156,
    height: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    padding: 16,
  },
  featureIcon: {
    marginBottom: 16,
  },
  iconBackground: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  featureTextContainer: {
    gap: 4,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.38,
    lineHeight: 24,
  },
  featureSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.7)',
    letterSpacing: -0.08,
    lineHeight: 18,
  },
  plansContainer: {
    marginBottom: 16,
  },
  planCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  selectedCard: {
    backgroundColor: 'rgba(40, 175, 110, 0.24)',
    borderColor: '#28AF6E',
    borderWidth: 1.5,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#28AF6E',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  planContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingRight: 50,
  },
  checkBox: {
    marginRight: 12,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  checkedCircle: {
    backgroundColor: '#28AF6E',
    borderColor: '#28AF6E',
  },
  planInfo: {
    flex: 1,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  planDescription: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  continueButton: {
    backgroundColor: '#28AF6E',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 40,
  },
  continueText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  legalContainer: {
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  legalText: {
    fontSize: 9,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
    lineHeight: 12,
  },
  legalLinksText: {
    fontSize: 11,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    lineHeight: 13,
    marginTop: 8,
  },
  iconImage: {
    width: 18,
    height: 18,
    tintColor: '#FFFFFF',
  },
});

export default PaymentScreen; 