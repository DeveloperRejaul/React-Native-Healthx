import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { colors } from 'src/constants/colors';
import { rf, rw } from 'src/utils/size';

import { IInputProps } from './types';

const ICON_SIZE = rf(3);
export default function Input(props: IInputProps) {
  const { label, onChangeText, type = 'text', value } = props;

  const [isFocus, setFocus] = useState(false);
  const [eyeOff, setEyeOff] = useState(true);
  const bottom = useSharedValue(5);

  useEffect(() => {
    if (isFocus) bottom.value = withTiming(30, { duration: 300 });
    if (!value && !isFocus) bottom.value = withTiming(5, { duration: 300 });
  }, [isFocus]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.placeholder, { bottom }]}>
        <View style={styles.placeholderLeft}>
          {icons[type]}
          <Text style={styles.placeholderText}>{label} </Text>
        </View>
        {type === 'password' && (
          <Feather
            name={eyeOff ? 'eye-off' : 'eye'}
            size={ICON_SIZE}
            onPress={() => setEyeOff((pre) => !pre)}
            color={colors.coolGray400}
          />
        )}
      </Animated.View>
      <View style={styles.inputBody}>
        <TextInput
          secureTextEntry={type === 'password' && eyeOff}
          value={value}
          onChangeText={onChangeText}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const icons = {
  password: <Feather name="lock" size={ICON_SIZE} color={colors.coolGray400} />,
  text: <Ionicons name="call-outline" size={ICON_SIZE} color={colors.coolGray400} />,
};

const styles = StyleSheet.create({
  inputBody: {
    borderBottomWidth: 2,
    borderBottomColor: colors.coolGray300,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  input: {
    width: '100%',
    color: colors.coolGray700,
    fontSize: rf(2),
  },
  placeholder: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    justifyContent: 'space-between',
  },
  placeholderText: {
    color: colors.coolGray500,
    fontWeight: '500',
    fontSize: rf(2),
  },
  container: {
    height: 70,
  },
  placeholderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: rw(2),
  },
});
