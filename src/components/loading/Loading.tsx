import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { rw } from 'src/utils/size';

const ROSE_COLOR = '#f43f5e';
const INDIGO_COLOR = '#6366f1';
const EMERALD_COLOR = '#10b981';
const LOADER_SIZE = rw(10);

export default function Loading() {
  const progress = useSharedValue(0);

  const box01AnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        [ROSE_COLOR, INDIGO_COLOR, EMERALD_COLOR]
      ),
    };
  });
  const box02AnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        [INDIGO_COLOR, EMERALD_COLOR, ROSE_COLOR]
      ),
    };
  });

  const box03AnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        [ROSE_COLOR, EMERALD_COLOR, INDIGO_COLOR]
      ),
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000 }), -1, false);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <Animated.View
          style={[box01AnimatedStyle, styles.loader, { backgroundColor: INDIGO_COLOR }]}
        />
        <Animated.View
          style={[box02AnimatedStyle, styles.loader, { backgroundColor: EMERALD_COLOR }]}
        />
        <Animated.View
          style={[box03AnimatedStyle, styles.loader, { backgroundColor: ROSE_COLOR }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    height: LOADER_SIZE,
    width: LOADER_SIZE,
    borderRadius: LOADER_SIZE / 2,
    marginHorizontal: rw(2),
  },
});
