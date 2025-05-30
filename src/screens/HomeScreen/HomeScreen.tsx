import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useQuestions } from './hooks/useQuestions';
import { useCategories } from './hooks/useCategories';
import { styles } from './HomeScreen.styles';

// Components
import Header from '../../components/Header';
import TabBar from '../../components/TabBar';
import CategoryCard from '../../components/CategoryCard';
import PremiumBanner from '../../components/PremiumBanner';
import QuestionsCard from '../../components/QuestionsCard';

const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { questions, questionsLoading, questionsError } = useQuestions();
  const { categories, categoriesLoading, categoriesError } = useCategories();

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  // Loading state - show when both questions and categories are loading initially
  if ((questionsLoading && !questions) && (categoriesLoading && !categories)) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  // Error state - show when questions failed and no data exists
  if (questionsError && !questions) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{questionsError}</Text>
      </View>
    );
  }

  const renderListHeader = () => (
    <>
      <PremiumBanner />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Questions</Text>
        {questionsLoading && !questions && (
          <View style={styles.centerContainerSmall}>
            <ActivityIndicator size="small" color="#007AFF" />
          </View>
        )}
        {questionsError && !questions && (
          <View style={styles.centerContainerSmall}>
            <Text style={styles.errorTextSmall}>{questionsError}</Text>
          </View>
        )}
        {questions && questions.length > 0 && (
          <FlatList
            data={questions}
            renderItem={({ item }) => <QuestionsCard title={item.title} image_uri={item.image_uri} />}
            keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.questionsList}
          />
        )}
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
      </View>
    </>
  );

  const renderListEmpty = () => {
    if (categoriesLoading) {
      return (
        <View style={styles.centerContainerSmall}>
          <ActivityIndicator size="small" color="#007AFF" />
        </View>
      );
    }
    if (categoriesError) {
      return (
        <View style={styles.centerContainerSmall}>
          <Text style={styles.errorTextSmall}>{categoriesError}</Text>
        </View>
      );
    }
    if (categories && categories.length === 0) {
      return <Text style={styles.noDataText}>Gösterilecek kategori bulunamadı.</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ListHeaderComponent={renderListHeader}
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard title={item.title} imageUrl={item.image.url} />
        )}
        keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.mainFlatListContent}
        ListEmptyComponent={renderListEmpty}
        showsVerticalScrollIndicator={false}
      />
      <TabBar activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

export default HomeScreen; 