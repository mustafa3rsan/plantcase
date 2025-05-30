import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainFlatListContent: {
    paddingHorizontal: 12,
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
  loadingText: {
    marginTop: 10,
    fontSize: 16,
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#888',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  questionsList: {
    paddingHorizontal: 0,
  },
}); 