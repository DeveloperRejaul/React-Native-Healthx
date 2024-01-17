import { MaterialIcons, Fontisto, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';
import { rf, rh } from 'src/utils/size';

const TAB_BAR_HEIGHT = rh(9);

export default () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.textLight0,
      tabBarInactiveTintColor: colors.coolGray400,
      tabBarLabel: '',
      tabBarStyle: { height: TAB_BAR_HEIGHT },
    }}>
    <Tabs.Screen
      name="home"
      options={{
        tabBarIcon: ({ color, focused }) => (
          <LinearGradient
            colors={
              focused
                ? [colors.lightBlue500, colors.lightBlue600]
                : [colors.textLight0, colors.textLight0]
            }
            style={styles.iconBody}>
            <MaterialIcons name="home" size={rf(4)} color={color} />
          </LinearGradient>
        ),
      }}
    />
    <Tabs.Screen
      name="love"
      options={{
        tabBarIcon: ({ color, focused }) => (
          <LinearGradient
            colors={
              focused
                ? [colors.lightBlue500, colors.lightBlue600]
                : [colors.textLight0, colors.textLight0]
            }
            style={styles.iconBody}>
            <Fontisto name="heart" size={rf(3)} color={color} />
          </LinearGradient>
        ),
      }}
    />
    <Tabs.Screen
      name="shop"
      options={{
        tabBarIcon: ({ color, focused }) => (
          <LinearGradient
            colors={
              focused
                ? [colors.lightBlue500, colors.lightBlue600]
                : [colors.textLight0, colors.textLight0]
            }
            style={styles.iconBody}>
            <MaterialIcons name="shopping-cart" size={rf(4)} color={color} />
          </LinearGradient>
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        tabBarIcon: ({ color, focused }) => (
          <LinearGradient
            colors={
              focused
                ? [colors.lightBlue500, colors.lightBlue600]
                : [colors.textLight0, colors.textLight0]
            }
            style={styles.iconBody}>
            <Ionicons name="person" size={rf(4)} color={color} />
          </LinearGradient>
        ),
      }}
    />
  </Tabs>
);

const styles = StyleSheet.create({
  iconBody: {
    height: TAB_BAR_HEIGHT * 0.7,
    width: TAB_BAR_HEIGHT * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
