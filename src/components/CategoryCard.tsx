import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
}

const cardInternalPadding = 16;
// Kartın genişliğini ekranın yarısı eksi boşluklar olarak ayarlayalım
const cardMargin = 8;
const screenPadding = 12;
const numColumns = 2;
const cardWidth = (Dimensions.get('window').width / numColumns) - (cardMargin * (numColumns - 1) / numColumns) - (screenPadding * 2 / numColumns) - cardMargin;

const textContainerWidth = cardWidth * 0.5;

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={[styles.textContainer, { width: textContainerWidth }]}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 152,
    borderRadius: 12,
    backgroundColor: '#F4F6F6',
    marginHorizontal: cardMargin,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: 'rgba(41, 187, 137, 0.18)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    // Kartın üst kısmını kaplayacak şekilde ayarlandı.
    height: 150, 
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    left: cardInternalPadding,
    top: cardInternalPadding,
  },
  title: {
    fontFamily: 'Rubik', // Figma'dan (style_5IFG8E)
    fontWeight: '500', // Figma'dan (style_5IFG8E)
    fontSize: 16, // Figma'dan (style_5IFG8E)
    lineHeight: 16 * 1.3125, // Figma'dan (style_5IFG8E -> 1.3125em)
    // letterSpacing: Figma'da '-1.9999999552965164%' olarak belirtilmiş. 16px * -0.01999... = -0.3199...
    letterSpacing: -0.32,
    color: '#13231B', // Figma'dan (fill_CS92ZL)
    textAlign: 'left', // Figma'dan (style_5IFG8E)
  },
});

export default CategoryCard; 