import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { colors } from 'src/constants/colors';
import { rf } from 'src/utils/size';
export default () => {
  const router = useRouter();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTitle: 'Details',
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              style={{ marginRight: 10 }}
              name="arrow-back-outline"
              size={rf(4)}
              color={colors.coolGray900}
            />
          ),
        }}
      />
    </Stack>
  );
};
