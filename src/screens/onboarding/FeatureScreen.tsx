import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

const { width, height } = Dimensions.get('window');

const FeatureScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Steps' as never);
  };

  return (
    <ImageBackground 
      source={require('../../../assets/Background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topContentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Take a photo to <Text style={styles.boldIdentifyText}>identify</Text> {'\n'}the plant!
            </Text>
            <Image 
              source={require('../../../assets/figma/Group_2_1_569.png')}
              style={styles.brushImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.imageContentContainer}>
          <Image 
            source={require('../../../assets/figma/Shadow_1_560.svg')}
            style={styles.shadowImage}
            resizeMode="contain" 
          />
          <Image 
            source={require('../../../assets/figma/Plant_1_561.png')}
            style={styles.plantImage}
            resizeMode="contain"
          />
          <Image 
            source={require('../../../assets/figma/Phone_1_562.png')}
            style={styles.mainImage}
            resizeMode="contain"
          />
          <Image 
            source={require('../../../assets/figma/cameraline.png')}
            style={styles.scanImage}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.bottomContainer}>
    
          <Button 
            title="Continue"
            onPress={handleNext}
            style={styles.button}
          />
                <View style={styles.sliderContainer}>
            <View style={[styles.sliderDot, styles.sliderDotActive]} />
            <View style={[styles.sliderDot, styles.sliderDotInactive]} />
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
    backgroundColor: '#FDFFFE',
  },
  safeArea: {
    flex: 1,
  },
  topContentContainer: {
    alignItems: 'center',
    marginTop: 59,
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 315,
    position: 'relative',
    height: 66,
  },
  titleText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 28,
    lineHeight: 33.18,
    letterSpacing: -1,
    color: '#13231B',
    textAlign: 'left',
  },
  boldIdentifyText: {
    fontWeight: '900',
    fontFamily: 'Rubik-Black',
    letterSpacing: -0.5,
  },
  brushImage: {
    width: 136,
    height: 30,
    position: 'absolute',
    left: 143,
    top: 20,
  },
  imageContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 375,
    height: 530,
    marginTop: 0,
    marginBottom: 20,
  },
  mainImage: {
    width: 375,
    height: 523,
    position: 'absolute',
    left: 0,
    top: -13,
    transform: [{ scale: 1.10 }],
  },
  plantImage: {
    width: 375,
    height: 361,
    position: 'absolute',
    left: -20,
    top: -20,
    transform: [{ scale: 1.15 }],
  },
  scanImage: {
    width: 375,
    height: 384,
    position: 'absolute',
    left: 0,
    top: 22,
    transform: [{ scale: 1.10 }],
  },
  shadowImage: {
    width: 214,
    height: 12,
    position: 'absolute',
    left: 80,
    top: 451,
    transform: [{ scale: 1.10 }],
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 34,
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
  button: {
    backgroundColor: '#28AF6E',
    borderRadius: 12,
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeatureScreen; 