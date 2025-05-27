import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

const { width, height } = Dimensions.get('window');

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Feature' as never);
  };

  return (
    <ImageBackground 
      source={require('../../../assets/Background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Welcome to <Text style={styles.boldText}>PlantApp</Text>
            </Text>
            <Text style={styles.subtitle}>
              Identify more than 3000+ plants and {'\n'}88% accuracy.
            </Text>
          </View>
          
          <Image 
            source={require('../../../assets/frame13.png')} 
            style={styles.plantImage}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.bottomContainer}>
          <Button 
            title="Get Started"
            onPress={handleNext}
            style={styles.button}
          />
          <Text style={styles.legalText}>
            By tapping next, you are agreeing to PlantID{'\n'}
            <Text style={styles.underlinedText}>Terms of Use</Text> & <Text style={styles.underlinedText}>Privacy Policy</Text>.
          </Text>
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
    paddingHorizontal: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 8,
    position: 'absolute',
    width: 300,
    height: 85,
    left: 24,
    top: 59,
    zIndex: 1,
  },
  title: {
    width: 286,
    height: 33,
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: 0.07,
    color: '#13231B',
  },
  boldText: {
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
  },
  subtitle: {
    width: 300,
    height: 44,
    fontFamily: 'Rubik-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.07,
    color: 'rgba(19, 35, 27, 0.7)',
  },
  plantImage: {
    position: 'absolute',
    width: 375,
    height: 499,
    left: 0,
    top: 168,
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
  },
  legalText: {
    fontSize: 11,
    fontFamily: 'Rubik-Regular',
    color: 'rgba(89, 113, 101, 0.7)',
    textAlign: 'center',
    marginTop: 20,
  },
  underlinedText: {
    textDecorationLine: 'underline'
  }
});

export default WelcomeScreen; 