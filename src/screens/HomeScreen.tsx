import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setLoading, setData, setError } from '../store/slices/apiSlice';
import TabBar from '../components/TabBar';
import Header from '../components/Header';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.api);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      dispatch(setLoading(true));
      // Gerçek API endpoint'i buraya eklenecek
      // const response = await fetch('YOUR_API_ENDPOINT');
      // const data = await response.json();
      
      setTimeout(() => {
        dispatch(setData({
          message: 'Ana ekrana hoş geldiniz!',
          items: ['Öğe 1', 'Öğe 2', 'Öğe 3'],
        }));
      }, 1000);
    } catch (error) {
      dispatch(setError('Veri yüklenirken hata oluştu'));
    }
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Premium Box Section */}
        <View style={styles.premiumBox}>
          <View style={styles.premiumBoxIconContainer}>
            {/* Placeholder for the main premium icon */}
            <Image source={require('../../assets/icons/Icon.png')} style={styles.premiumBoxIcon} />
          </View>
          <View style={styles.premiumBoxTextContainer}>
            <Text style={styles.premiumBoxTitle}>FREE Premium Available</Text>
            <Text style={styles.premiumBoxSubtitle}>Tap to upgrade your account!</Text>
          </View>
          <View style={styles.premiumBoxArrowContainer}>
            {/* Placeholder for the arrow icon */}
            <Image source={require('../../assets/icons/Layer 2.png')} style={styles.premiumBoxArrowIcon} />
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Ana Ekran</Text>
     
        </View>
        
        <View style={styles.content}>
          {data && (
            <>
              <Text style={styles.message}>{data.message}</Text>
              {data.items && data.items.map((item: string, index: number) => (
                <View key={index} style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>
      
      <TabBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120, // TabBar için alan bırak
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    paddingTop: 60, // Adjusted paddingTop for better spacing if Header is transparent or minimal
    backgroundColor: '#F8F9FA', // Light grey background for the header section
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Subtle border for separation
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  // Premium Box Styles
  premiumBox: {
    flexDirection: 'row',
    backgroundColor: '#24201A', // Dark background from Figma
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  premiumBoxIconContainer: {
    marginRight: 15,
    // Placeholder style for icon
    // padding: 5, // Keep padding if needed for background around icon
    // backgroundColor: '#D0B070', // This was for the text background, might not be needed for an image
    borderRadius: 8,
    alignItems: 'center', // Center the icon if container is larger
    justifyContent: 'center', // Center the icon if container is larger
  },
  premiumBoxIcon: {
    width: 50, // Specify width for the icon
    height: 50, // Specify height for the icon
    resizeMode: 'contain', // Adjust resizeMode as needed
    alignItems: 'center', // Center the icon if container is larger
    justifyContent: 'center', // Center the icon if container is larger
  },
  premiumBoxTextContainer: {
    flex: 1,
  },
  premiumBoxTitle: {
    fontSize: 16,
    fontWeight: '600', // Semibold
    color: '#E5C990', // Gold-like color from Figma (approximate)
    marginBottom: 4,
  },
  premiumBoxSubtitle: {
    fontSize: 13,
    color: '#FFDE9C', // Lighter gold-like color (approximate)
  },
  premiumBoxArrowContainer: {
    marginLeft: 10,
    alignItems: 'center', // Center the icon if container is larger
    justifyContent: 'center', // Center the icon if container is larger
  },
  premiumBoxArrowIcon: {
    width: 24, // Specify width for the arrow icon
    height: 24, // Specify height for the arrow icon
    resizeMode: 'contain',
  },
  content: {
    padding: 20,
  },
  message: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666666',
  },
  errorText: {
    fontSize: 16,
    color: '#FF3B30',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen; 