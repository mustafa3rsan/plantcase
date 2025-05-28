import React from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

const StepsScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Payment' as never);
  };

  return (
    <ImageBackground 
      source={require('../../../assets/Background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* İçerik buraya gelecek, şimdilik boş */}
        </View>
        
        <View style={styles.bottomContainer}>
          <Button
            title="Devam Et"
            onPress={handleNext}
            style={styles.button}
          />
          <View style={styles.sliderContainer}>
            <View style={[styles.sliderDot, styles.sliderDotInactive]} />
            <View style={[styles.sliderDot, styles.sliderDotActive]} />
            <View style={[styles.sliderDot, styles.sliderDotInactive]} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFE', // FeatureScreen'den alındı
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between', // Buton ve slider'ı aşağıda tutmak için
  },
  content: {
    flex: 1,
    // Bu kısım şimdilik boş, gerekirse stil eklenebilir
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 34,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#28AF6E',
    borderRadius: 12,
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 10,
    top: 20,
  },
  sliderDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  sliderDotActive: {
    backgroundColor: '#13231B',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  sliderDotInactive: {
    backgroundColor: 'rgba(19, 35, 27, 0.25)',
  },
});

export default StepsScreen; 