import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import HorizontalShimmer from './src/components/HorizontalShrimmer';

const ShrimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <HorizontalShimmer
        width={100}
        height={100}
        radius={12}
        padding={12}
        horizontal={false}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
