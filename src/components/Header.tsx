import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';

// Figma'dan alınan stil tanımlamalarına göre stiller oluşturulacak.
// Bu kısım Figma verilerine göre detaylandırılacak.
// Örnek olarak temel bir yapı oluşturuluyor.

const Header: React.FC = () => {
  return (
    <ImageBackground 
      source={require('../../assets/figma/maskgroup.png')} // Resim yolunu varsayılan olarak ayarladım
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle} // Arka plan resminin stilini ayarlamak için
    >
      <View style={styles.container}>
        {/* StatusBar kaldırıldı */}
        <View style={styles.titleContainer}>
          <Text style={styles.greetingText}>Hi, plant lover!</Text>
          <Text style={styles.subGreetingText}>Good Afternoon! ⛅</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={'\uD83D\uDD0D Search for plants'} // Büyüteç ikonu eklendi
            placeholderTextColor="#AFAFAF"
          />
          {/* Arama ikonu buraya eklenecek */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%', // Genişliği doldurması için
    // Yükseklik Figma verisine göre ayarlanabilir veya içerik kadar olabilir.
    // Örneğin: height: 175, // Figma'daki Header (GROUP 3:7284) yüksekliği
  },
  imageStyle: {
    // resizeMode: 'cover', // veya 'contain', 'stretch' vs. ihtiyaca göre
    // opacity: 0.5, // Eğer resmin saydamlığı ayarlanacaksa
  },
  container: {
    backgroundColor: 'transparent', // Arka plan resmi görüneceği için container backgroundColor transparan olmalı
    paddingTop: 40, // Status bar kaldırıldığı için paddingTop eklendi (yaklaşık bir değer)
    // Diğer stiller Figma verilerine göre eklenecek.
    // Örneğin yükseklik, paddingler vs.
    // effect_XUELWX (backdropFilter: blur(45px)) -> React Native'de doğrudan desteklenmiyor, alternatif kütüphaneler gerekebilir.
    paddingBottom: 20, // Arama çubuğu ile alt kenar arasında boşluk bırakmak için
  },
  // statusBar stili kaldırıldı
  // timeText stili kaldırıldı
  titleContainer: { // I3:7285;268:8344 (Titles)
    paddingHorizontal: 24, // layout_QY0E42 x
    marginTop: 20, // 50 (Titles y) - 47 (Status Bar height) = 3. Yaklaşık bir değer.
  },
  greetingText: { // I3:7285;268:8345 (Hi, Micheal -> Hi, plant lover!)
    fontFamily: 'Rubik', // style_HG5EUF
    fontWeight: '400', // style_HG5EUF
    fontSize: 16, // style_HG5EUF
    color: '#13231B', // fill_8NIVA8
    // letterSpacing: '0.43750000186264515%',
    marginBottom: 6, // layout_QY0E42 gap
  },
  subGreetingText: { // I3:7285;268:8346 (Good Afternoon! ⛅)
    fontFamily: 'Rubik', // style_MEDBNE
    fontWeight: '500', // style_MEDBNE
    fontSize: 24, // style_MEDBNE
    color: '#13231B', // fill_8NIVA8
    // letterSpacing: '1.4583333084980645%',
  },
  searchBarContainer: { // I3:7285;268:8350 (Search Bar)
    marginTop: 14, // 117 (Search Bar y) - (50 + ~50 (Titles container height)) = ~17. Yaklaşık. Figma'daki layout_TU754U y: 117
    paddingHorizontal: 24, // layout_TU754U x
    // height: 44, // layout_TU754U
  },
  searchInput: { // I3:7285;268:8351 (Background of Search Bar) & I3:7285;268:8353 (Search for plants text)
    backgroundColor: '#FFFFFF', // Tamamen opak beyaz arka plan
    borderRadius: 12, // layout_B7ETNJ
    height: 44, // layout_B7ETNJ
    paddingHorizontal: 16, // Figma'daki Text Group (icon + placeholder) x:16 pozisyonuna göre ayarlandı
    fontSize: 15.5, // style_ZAGT6B
    fontFamily: 'Rubik', // style_ZAGT6B
    fontWeight: '400', // style_ZAGT6B
    color: '#130F26', // placeholderTextColor #AFAFAF, asıl text rengi Figma'da belirtilmemiş, ana metin rengi kullanılabilir.
    // borderColor: 'rgba(60, 60, 67, 0.25)', // stroke_9J6RJY
    // borderWidth: 0.2, // stroke_9J6RJY
    // effect_ED7GNB (backdropFilter: blur(5px))
  },
  // Diğer ikonlar ve detaylar için ek stiller eklenebilir.
});

export default Header; 