import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/types';

const PremiumBanner: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePremiumPress = () => {
    navigation.navigate('PremiumPaymentScreen', { cameFrom: 'HomeScreen' } as never);
  };

  return (
    <TouchableOpacity onPress={handlePremiumPress}>
      <View style={styles.premiumBox}>
        <View style={styles.premiumBoxIconContainer}>
          <Image source={require('../../assets/icons/Icon.png')} style={styles.premiumBoxIcon} />
        </View>
        <View style={styles.premiumBoxTextContainer}>
          <Text style={styles.premiumBoxTitle}>FREE Premium Available</Text>
          <Text style={styles.premiumBoxSubtitle}>Tap to upgrade your account!</Text>
        </View>
        <View style={styles.premiumBoxArrowContainer}>
          <Image source={require('../../assets/icons/Layer 2.png')} style={styles.premiumBoxArrowIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  premiumBox: {
    flexDirection: 'row',
    backgroundColor: '#24201A',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  premiumBoxIconContainer: {
    marginRight: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumBoxIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumBoxTextContainer: {
    flex: 1,
  },
  premiumBoxTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E5C990',
    marginBottom: 4,
  },
  premiumBoxSubtitle: {
    fontSize: 13,
    color: '#FFDE9C',
  },
  premiumBoxArrowContainer: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumBoxArrowIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default PremiumBanner; 