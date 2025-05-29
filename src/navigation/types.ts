import { StackNavigationProp } from '@react-navigation/stack';

// Onboarding Navigator için ekran ve parametre tipleri
export type OnboardingStackParamList = {
  Welcome: undefined;
  Feature: undefined;
  Steps: undefined;
  Payment: undefined;
};

// Ana (Root) Navigator için ekran ve parametre tipleri
export type RootStackParamList = {
  Home: undefined;
  Onboarding: { screen: keyof OnboardingStackParamList, params?: OnboardingStackParamList[keyof OnboardingStackParamList] };
  PremiumPaymentScreen: { cameFrom?: string };
  // Diğer ana ekranlarınızı ve varsa parametrelerini buraya ekleyebilirsiniz
  // Örnek: Profile: { userId: string };
};

// Genel navigasyon prop tipi (opsiyonel, belirli ekranlar için daha spesifik tipler oluşturulabilir)
export type GenericNavigationProp = StackNavigationProp<RootStackParamList>;

// Belirli ekranlar için daha spesifik navigasyon prop tipleri
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type PaymentScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Payment'>;
// Diğer ekranlarınız için de benzer şekilde tipler oluşturabilirsiniz

export {}; // Dosyanın bir modül olarak tanınması için eklendi 