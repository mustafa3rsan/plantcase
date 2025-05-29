import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
}

const cardInternalPadding = 16;
// Kartın genişliğini ekranın yarısı eksi boşluklar olarak ayarlayalım
const cardMargin = 8; // Kartlar arası yatay boşluk
const screenPadding = 12; // HomeScreen'deki mainFlatListContent paddingHorizontal
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
    // width: 158, // Figma'dan gelen sabit genişlik yerine dinamik genişlik kullanılıyor
    height: 152, // Figma'dan
    borderRadius: 12, // Figma'dan
    backgroundColor: '#F4F6F6', // Figma'dan (Background -> Background -> fill_AC8SJ3)
    marginHorizontal: cardMargin,
    // Gölge Figma'da belirtilmiş ancak React Native'de elevation veya shadow props ile daha iyi kontrol edilebilir.
    // shadowColor: 'rgba(60, 60, 67, 0.1)', // Figma'dan (Background -> Background -> stroke_R0L10Z'nin rengi değil, effects'ten gelmeli)
    // shadowOffset: { width: 0, height: 0.5 }, // Figma'da doğrudan böyle bir offset yok, effect_6G1JZJ (blur(5px)) var.
    // shadowOpacity: 1,
    // shadowRadius: 0, -> Bu blur efekti için shadowRadius daha yüksek olmalı
    elevation: 2, // Android için genel bir gölge, Figma'daki blur(5px) ve stroke rengiyle tam eşleşmeyebilir.
    borderWidth: 0.5, // Figma'dan (Background -> Background -> stroke_MYCD8V -> strokeWeight)
    borderColor: 'rgba(41, 187, 137, 0.18)', // Figma'dan (Background -> Background -> stroke_MYCD8V -> colors)
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    // Figma'da resim boyutu 212x200 ve konumu x:42, y:0, scaleMode: STRETCH.
    // Kartın üst kısmını kaplayacak şekilde ayarlayalım.
    height: 150, // Kart yüksekliğinin bir kısmı, textContainer'a yer bırakacak şekilde.
    resizeMode: 'cover', // 'stretch' yerine 'cover' genellikle daha iyi görünür.
  },
  textContainer: {
    position: 'absolute',
    left: cardInternalPadding,
    top: cardInternalPadding,
    // right: 16, // Kaldırıldı, yerine width kullanılacak
    // padding: 16, // Figma'da Text frame'in kendi padding'i yok, konumu var.
    // justifyContent: 'flex-start', // Tek satır metin için varsayılan
    // alignItems: 'flex-start', // Tek satır metin için varsayılan
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