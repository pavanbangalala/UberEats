import {View, Text} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES} from '../../src/constants/Theme';
const ShrimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

type ReusableShrimmerProps = {
  width: number;
  height: number;
  radius: number;
  marginRight: number;
};
const ReusableShrimmer = ({
  width,
  height,
  radius,
  marginRight,
}: ReusableShrimmerProps) => {
  return (
    <ShrimmerPlaceholder
      style={{
        width: width,
        height: height,
        borderRadius: radius,
        marginRight: marginRight,
      }}
      shimmerColors={[COLORS.secondary1, COLORS.secondary, COLORS.secondary1]}
    />
  );
};

export default ReusableShrimmer;
