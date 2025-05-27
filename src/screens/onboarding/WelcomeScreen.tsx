import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

const { width } = Dimensions.get('window');

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Steps' as never);
  };

  return (
    <ImageBackground 
      source={require('../../../assets/Background.png')}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to PlantApp</Text>
        <Text style={styles.subtitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      
      <Button 
        title="Get Started"
        onPress={handleNext}
      />
      <Text style={styles.legalText}>
        By tapping next, you are agreeing to PlantID{'\n'}
        <Text style={{textDecorationLine: 'underline'}}>Terms of Use</Text> & <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>.
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#13231B',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(19, 35, 27, 0.7)',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  legalText: {
    fontSize: 11,
    color: 'rgba(89, 113, 101, 0.7)',
    textAlign: 'center',
    marginTop: 20,
  }
});

export default WelcomeScreen; 