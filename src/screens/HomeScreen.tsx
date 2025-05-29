import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import {
  setQuestionsLoading,
  setQuestions,
  setQuestionsError,
  Question
} from '../store/slices/apiSlice';
import TabBar from '../components/TabBar';
import Header from '../components/Header';
import QuestionsCard from '../components/QuestionsCard';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, questionsLoading, questionsError } = useSelector((state: RootState) => state.api);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    fetchQuestionsData();
  }, [dispatch]);

  const fetchQuestionsData = async () => {
    try {
      dispatch(setQuestionsLoading(true));
      const response = await fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
      if (!response.ok) {
        throw new Error('API yanıtı başarılı değil: ' + response.status);
      }
      const questionsData: Question[] = await response.json();
      dispatch(setQuestions(questionsData));
    } catch (error: any) {
      dispatch(setQuestionsError(error.message || 'Soru verileri yüklenirken bir hata oluştu'));
    }
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  if (questionsLoading && !questions) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  if (questionsError && !questions) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{questionsError}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.premiumBox}>
          <View style={styles.premiumBoxIconContainer}>
            <Image source={require('../../assets/icons/Icon.png')} style={styles.premiumBoxIcon} />
          </View>
          <View style={styles.premiumBoxTextContainer}>
            <Text style={styles.premiumBoxTitle}>FREE Premium Available</Text>
            <Text style={styles.premiumBoxSubtitle}>Tap to upgrade your account!</Text>
          </View>
          <View style={styles.premiumBoxArrowContainer}>
            <Image source={require('../../assets/icons/Layer 2.png')} style={styles.premiumBoxArrowIcon} />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Get Started</Text>
          {questionsLoading && questions && (
            <View style={styles.centerContainerSmall}>
              <ActivityIndicator size="small" color="#007AFF" />
            </View>
          )}
          {questionsError && (
            <View style={styles.centerContainerSmall}>
              <Text style={styles.errorTextSmall}>{questionsError}</Text>
            </View>
          )}
          {questions && questions.length > 0 && (
            <FlatList
              horizontal
              data={questions}
              renderItem={({ item }) => (
                <QuestionsCard title={item.title} image_uri={item.image_uri} />
              )}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.questionsList}
            />
          )}
          {questions && questions.length === 0 && !questionsLoading && !questionsError && (
            <Text style={styles.noDataText}>Gösterilecek soru bulunamadı.</Text>
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
    paddingBottom: 120,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  centerContainerSmall: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F8F9FA',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  premiumBox: {
    flexDirection: 'row',
    backgroundColor: '#24201A',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  premiumBoxIconContainer: {
    marginRight: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumBoxIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumBoxTextContainer: {
    flex: 1,
  },
  premiumBoxTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E5C990',
    marginBottom: 4,
  },
  premiumBoxSubtitle: {
    fontSize: 13,
    color: '#FFDE9C',
  },
  premiumBoxArrowContainer: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumBoxArrowIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  item: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    marginHorizontal: 20,
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
  loadingTextSmall: {
    marginTop: 5,
    fontSize: 14,
    color: '#666666',
  },
  errorText: {
    fontSize: 16,
    color: '#FF3B30',
    textAlign: 'center',
  },
  errorTextSmall: {
    fontSize: 14,
    color: '#FF3B30',
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  questionsList: {
    paddingHorizontal: 10,
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#888',
    marginTop: 15,
    paddingHorizontal: 20,
  }
});

export default HomeScreen; 