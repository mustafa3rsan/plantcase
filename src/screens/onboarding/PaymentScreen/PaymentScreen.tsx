import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, ImageBackground } from 'react-native';
import { usePaymentLogic } from './hooks/usePaymentLogic';
import { styles } from './PaymentScreen.styles';

const PaymentScreen: React.FC = () => {
  const { selectedPlan, handlePlanSelect, handleContinue, handleClose } = usePaymentLogic();

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground 
        source={require('../../../../assets/figma/cicekler.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <View style={styles.closeBackground}>
            <Text style={styles.closeIcon}>✕</Text>
          </View>
        </TouchableOpacity>
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
                      source={require('../../../../assets/figma/scanner.png')}
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
                      source={require('../../../../assets/figma/faster.png')}
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
              <Text style={styles.continueText}>Try free for 3 days</Text>
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

export default PaymentScreen; 