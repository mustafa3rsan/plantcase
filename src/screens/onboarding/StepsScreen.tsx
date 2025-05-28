import React from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground, Image, Text } from 'react-native';
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
        <View style={styles.titleContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Get plant </Text>
            <Text style={styles.titleBold}>care guides</Text>
          </View>
          <Image 
            source={require('../../../assets/figma/Group_2_1_569.png')}
            style={styles.brushImage}
            resizeMode="contain"
          />
        </View>

        <Image 
          source={require('../../../assets/figma/Object.png')} 
          style={styles.objectImage} 
        />

        <View style={styles.phoneContainer}>
          <View style={styles.phoneOverlay} />
          <Image
            source={require('../../../assets/figma/flatphone.png')}
            style={styles.phoneImage}
            resizeMode="contain"
          />
          <View style={styles.artworkContainer}>
            <Image
              source={require('../../../assets/figma/Artwork.png')}
              style={styles.artworkImage}
              resizeMode="contain"
            />
          </View>
        </View>
        
        <View style={styles.bottomContainer}>
          <Button
            title="Continue"
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
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: 59,
    marginHorizontal: 24,
    position: 'relative',
    zIndex: 2,
  },
  titleWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#13231B',
    lineHeight: 33,
    letterSpacing: -1,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  titleBold: {
    fontFamily: 'Rubik-Bold',
    fontSize: 28,
    fontWeight: '900',
    color: '#13231B',
    lineHeight: 33,
    letterSpacing: -1,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  brushImage: {
    marginTop: 0,
    marginLeft: 60,
    height: 40,
    width: 200,
  },
  objectImage: {
    position: 'absolute',
    width: 428,
    height: 486,
    top: 109,
    left: -21,
    opacity: 0.8,
    zIndex: 0,
  },
  phoneContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  phoneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 1,
  },
  phoneImage: {
    width: 261,
    height: 540,
    top: 32,
    zIndex: 2,
  },
  artworkContainer: {
    position: 'absolute',
    width: 250,
    height:200,
    top:-50,
    left: 0,
    zIndex: 3,
  },
  artworkImage: {
    width: '150%',
    height: '150%',
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 34,
    alignItems: 'center',
    zIndex: 2,
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