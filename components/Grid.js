import React from 'react';
import { View } from 'react-native';

const Grid = ({ width, height, style }) => {
  return (
    <View
      style={[
        { borderWidth: 1, borderColor: 'gray', flex: 1, alignItems: 'center', justifyContent: 'center' },
        { width, height },
        style,
      ]}
    />
  );
};

export default Grid;
