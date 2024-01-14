import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from 'src/constants/colors';
import { rf } from 'src/utils/size';

interface ICheckBoxProps {
  handleCheck?: (value: boolean) => void;
}

export default function CheckBox({ handleCheck }: ICheckBoxProps) {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    handleCheck?.(check);
  }, [check]);
  return (
    <Pressable style={styles.checkBody} onPress={() => setCheck((pre) => !pre)}>
      {check && <Feather name="check" size={rf(2.1)} color={colors.coolGray500} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkBody: {
    borderWidth: 2,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.coolGray500,
  },
});
