import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

interface QuestionsCardProps {
  title: string;
  image_uri?: string; // Opsiyonel image_uri prop'u eklendi
}

const QuestionsCard: React.FC<QuestionsCardProps> = ({ title, image_uri }) => {
  const imageSource = image_uri ? { uri: image_uri } : require('../../assets/images/questions_card_background.png');

  return (
    <ImageBackground
      source={imageSource}
      style={styles.card}
      imageStyle={styles.cardImage} // Resmin kendisine uygulanacak stiller (örn: resizeMode)
    >
      <Text style={styles.titleText}>{title}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: { // Bu stil ImageBackground'a uygulanacak
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: 'hidden', // ImageBackground içeriğinin border radius'e uyması için önemli
    margin: 10,
    backgroundColor: '#333333', // Resim yüklenemezse veya şeffafsa diye koyu bir yedek renk
    justifyContent: 'flex-end', // Metni (child) en alta yaslar
    paddingHorizontal: 14, // Metin için yanlardan boşluk (eski textContainer'dan)
    paddingBottom: 12, // Metin için alttan boşluk (eski textContainer'dan)
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: { // ImageBackground içindeki asıl resme uygulanacak stil
    resizeMode: 'cover', // Resmin tamamını kaplayıp taşan kısımları keser, genellikle daha iyi görünür
    // borderRadius: 12, // ImageBackground'da overflow: 'hidden' olduğu için genellikle gerekmez
  },
  titleText: {
    fontFamily: 'Rubik', 
    fontWeight: '500', 
    fontSize: 15,
    color: '#FFFFFF', 
    lineHeight: 20,
    letterSpacing: -0.24,
    textAlign: 'left',
    // Okunabilirliği artırmak için metin gölgesi
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});

export default QuestionsCard; 