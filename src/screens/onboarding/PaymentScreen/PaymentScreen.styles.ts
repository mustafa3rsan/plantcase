import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

// Common styles
const BORDER_RADIUS = 12;
const COLORS = {
  background: '#101E17',
  white: '#FFFFFF',
  whiteOpacity: 'rgba(255, 255, 255, 0.7)',
  primary: '#28AF6E',
  overlay: 'rgba(255, 255, 255, 0.08)',
  border: 'rgba(255, 255, 255, 0.3)',
};

export const styles = StyleSheet.create({
  // Container styles
  backgroundContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: screenHeight * 0.5,
    zIndex: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
  },
  bottomSection: {
    marginBottom: 20,
    marginTop: 40,
  },

  // Header styles
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.white,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '300',
    color: COLORS.whiteOpacity,
    textAlign: 'left',
    marginTop: 4,
    letterSpacing: 0.38,
  },

  // Features section
  featuresScrollView: {
    marginBottom: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 24,
  },
  featureCard: {
    width: 156,
    height: 130,
    backgroundColor: COLORS.overlay,
    borderRadius: 14,
    padding: 16,
  },
  featureIcon: {
    marginBottom: 16,
  },
  iconBackground: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  iconImage: {
    width: 18,
    height: 18,
    tintColor: COLORS.white,
  },
  featureTextContainer: {
    gap: 4,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.white,
    letterSpacing: 0.38,
    lineHeight: 24,
  },
  featureSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.whiteOpacity,
    letterSpacing: -0.08,
    lineHeight: 18,
  },

  // Plans section
  plansContainer: {
    marginBottom: 16,
  },
  planCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    position: 'relative',
    overflow: 'hidden',
  },
  selectedCard: {
    backgroundColor: 'rgba(40, 175, 110, 0.24)',
    borderColor: COLORS.primary,
    borderWidth: 1.5,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '500',
  },
  planContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingRight: 50,
  },
  checkBox: {
    marginRight: 12,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.overlay,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  checkedCircle: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  planInfo: {
    flex: 1,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
    marginBottom: 4,
  },
  planDescription: {
    fontSize: 12,
    color: COLORS.whiteOpacity,
  },

  // Action button
  continueButton: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 40,
  },
  continueText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },

  // Legal section
  legalContainer: {
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  legalText: {
    fontSize: 9,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
    lineHeight: 12,
  },
  legalLinksText: {
    fontSize: 11,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    lineHeight: 13,
    marginTop: 8,
  },

  // Close button
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: BORDER_RADIUS,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 18,
    letterSpacing: -0.08,
  },
}); 