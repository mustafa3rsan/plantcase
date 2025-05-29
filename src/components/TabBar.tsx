import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface TabBarProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabPress }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: require('../../assets/icons/homeicon.png') },
    { id: 'diagnose', label: 'Diagnose', icon: require('../../assets/icons/health.png') },
    { id: 'scan', label: 'Scan', icon: require('../../assets/icons/scanicon.png'), isCenter: true },
    { id: 'garden', label: 'My Garden', icon: require('../../assets/icons/gardenicon.png') },   
    { id: 'profile', label: 'Profile', icon: require('../../assets/icons/profile.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <View style={styles.divider} />
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                tab.isCenter && styles.centerTab,
              ]}
              onPress={() => onTabPress(tab.id)}
            >
              {tab.isCenter ? (
                <View style={styles.scanButton}>
                  <View style={styles.scanButtonInner}>
                    <Image 
                      source={tab.icon} 
                      style={styles.scanIcon}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              ) : (
                <>
                  <View style={styles.iconContainer}>
                    {tab.icon ? (
                      <Image 
                        source={tab.icon} 
                        style={[
                          styles.icon,
                          { tintColor: activeTab === tab.id ? '#28AF6E' : '#BDBDBD' }
                        ]}
                        resizeMode="contain"
                      />
                    ) : (
                      <View style={[
                        styles.iconPlaceholder,
                        { backgroundColor: activeTab === tab.id ? '#28AF6E' : '#BDBDBD' }
                      ]} />
                    )}
                  </View>
                  <Text style={[
                    styles.label,
                    { color: activeTab === tab.id ? '#28AF6E' : '#979798' }
                  ]}>
                    {tab.label}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  tabBar: {
    height: 84,
    backgroundColor: 'transparent',
  },
  divider: {
    height: 0.5,
    backgroundColor: 'rgba(19, 35, 27, 0.1)',
  },
  tabContainer: {
    flexDirection: 'row',
    height: 49,
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 49,
  },
  centerTab: {
    position: 'relative',
    top: -14,
  },
  iconContainer: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: '#BDBDBD',
    borderRadius: 4,
  },
  label: {
    fontSize: 10,
    fontFamily: 'Rubik',
    fontWeight: '400',
    letterSpacing: -0.24,
    textAlign: 'center',
  },
  scanButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#28AF6E',
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.24)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.01,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default TabBar; 