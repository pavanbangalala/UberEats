import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {SIZES} from '../../src/constants/Theme';
import ReusableShimmer from './ReusableShrimmer';

type HorizontalShrimmmerProps = {
  horizontal: boolean;
  width: number;
  height: number;
  radius: number;
  padding: number;
};

const HorizontalShimmer = ({
  horizontal,
  width,
  height,
  radius,
  padding,
}: HorizontalShrimmmerProps) => {
  const shimerList = [1, 2, 3, 4, 5];
  return (
    <FlatList
      data={shimerList}
      horizontal={horizontal}
      contentContainerStyle={{columnGap: SIZES.medium}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View style={{padding: padding}}>
          <ReusableShimmer
            width={width}
            height={height}
            radius={radius}
            marginRight={padding}
          />
        </View>
      )}
    />
  );
};

export default HorizontalShimmer;

// const styles = StyleSheet.create({
//   shrimmer: (padding: number) => ({padding: padding}),
// });
