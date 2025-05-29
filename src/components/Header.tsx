import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';

// Figma'dan alınan stil tanımlamalarına göre stiller oluşturulacak.
// Bu kısım Figma verilerine göre detaylandırılacak.
// Örnek olarak temel bir yapı oluşturuluyor.

const Header: React.FC = () => {
  return (
    <ImageBackground 
      source={require('../../assets/figma/maskgroup.png')}
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.greetingText}>Hi, plant lover!</Text>
          <Text style={styles.subGreetingText}>Good Afternoon! ⛅</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={'\uD83D\uDD0D Search for plants'}
            placeholderTextColor="#AFAFAF"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
  },
  imageStyle: {
  },
  container: {
    backgroundColor: 'transparent',
    paddingTop: 40,
    paddingBottom: 20,
  },
  titleContainer: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  greetingText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 16,
    color: '#13231B',
    marginBottom: 6,
  },
  subGreetingText: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 24,
    color: '#13231B',
  },
  searchBarContainer: {
    marginTop: 14,
    paddingHorizontal: 24,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    height: 44,
    paddingHorizontal: 16,
    fontSize: 15.5,
    fontFamily: 'Rubik',
    fontWeight: '400',
    color: '#130F26',
  },
});

export default Header; 