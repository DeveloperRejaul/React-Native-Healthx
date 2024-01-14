import { MaterialIcons, Fontisto, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
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
      name="index"
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View
            style={{
              ...styles.iconBody,
              backgroundColor: focused ? colors.lightBlue500 : colors.textLight0,
            }}>
            <MaterialIcons name="home" size={rf(4)} color={color} />
          </View>
        ),
      }}
    />
    <Tabs.Screen
      name="love"
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View
            style={{
              ...styles.iconBody,
              backgroundColor: focused ? colors.lightBlue500 : colors.textLight0,
            }}>
            <Fontisto name="heart" size={rf(3)} color={color} />
          </View>
        ),
      }}
    />
    <Tabs.Screen
      name="shop"
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View
            style={{
              ...styles.iconBody,
              backgroundColor: focused ? colors.lightBlue500 : colors.textLight0,
            }}>
            <MaterialIcons name="shopping-cart" size={rf(4)} color={color} />
          </View>
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View
            style={{
              ...styles.iconBody,
              backgroundColor: focused ? colors.lightBlue500 : colors.textLight0,
            }}>
            <Ionicons name="person" size={rf(4)} color={color} />
          </View>
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
