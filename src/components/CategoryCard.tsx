import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 158,
    height: 152,
    borderRadius: 12,
    backgroundColor: '#F4F6F6',
    marginHorizontal: 8,
    shadowColor: 'rgba(60, 60, 67, 0.1)',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 1, // Android için gölge
    borderWidth: 0.5,
    borderColor: 'rgba(41, 187, 137, 0.18)',
    overflow: 'hidden', // Resmin kart sınırlarını aşmamasını sağlar
  },
  image: {
    width: '100%',
    height: 100, // Figma'daki yüksekliğe göre ayarlandı (200/2)
    resizeMode: 'cover', // Figma'da STRETCH, ancak cover daha iyi görünebilir
  },
  textContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'flex-start', // Metni sola yasla
    flex: 1, // Kalan alanı doldur
  },
  title: {
    fontFamily: 'Rubik', // Figma'dan
    fontWeight: '500', // Figma'dan
    fontSize: 16, // Figma'dan
    lineHeight: 16 * 1.3125, // Figma'dan (1.3125em)
    letterSpacing: -0.32, // Figma'dan (-1.9999999552965164% of 16px)
    color: '#13231B', // Figma'dan
    textAlign: 'left', // Figma'dan
  },
});

export default CategoryCard; 