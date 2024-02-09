import React from 'react';
import { View } from 'react-native';

const Rectangle = ({ children, style }) => {
  return <View style={[{ borderWidth: 2, borderColor: 'black' }, style]}>{children}</View>;
};

export default Rectangle;
