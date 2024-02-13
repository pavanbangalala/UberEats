import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import HorizontalShimmer from './src/components/HorizontalShrimmer';
import Navigator from './src/navigation';

const ShrimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const App = () => {
  return <Navigator />;
};

export default App;

const styles = StyleSheet.create({});
