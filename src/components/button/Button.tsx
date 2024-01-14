import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { rf } from 'src/utils/size';

import { styles } from './style';
import { type IButtonTypes } from './type';

export default function Button(props: IButtonTypes) {
  const { text, type = 'normal', onPress, textStyle, bodyStyle, isLoading } = props;

  return (
    <Pressable onPress={onPress} style={[styles[`body${type}`], bodyStyle]}>
      {isLoading ? (
        <ActivityIndicator size={rf(4)} />
      ) : (
        <Text style={[styles[`text${type}`], textStyle]}>{text}</Text>
      )}
    </Pressable>
  );
}
