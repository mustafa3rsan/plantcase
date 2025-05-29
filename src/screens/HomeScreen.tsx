import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
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
        <View style={styles.header}>
          <Text style={styles.title}>Ana Ekran</Text>
          <Text style={styles.subtitle}>Onboarding tamamlandı!</Text>
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
    paddingTop: 60,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
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